import "@/assets/css/servicelistpage.css";
import ProductCard from "@/components/product-card";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import StickyBox from "@/components/stickybox";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-no-indicator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { AutoComplete } from "@/components/ui/autocomplete";
import { useTranslation } from "react-i18next";
import ServiceAPI from "@/core/services/services";
import { Pagination } from "@/core/types/pagination";
import { Services } from "@/core/types/services";
import CategoriesAPI from "@/core/services/categories";
import _debounce from "lodash.debounce";

function Servicelistpage() {
  const { t } = useTranslation();
  const [maxPriceDB, setMaxPriceDB] = useState(0);
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    pageSize: 16,
    totalPage: 0,
    totalRecord: 0,
  });
  const [searchtext, setSearchText] = useState("");
  const [selectcategory, setSelectcategory] = useState("");
  const [selectsortby, setSelectsortby] = useState("asc");
  const [minprice, setMinprice] = useState(0);
  const [maxprice, setMaxprice] = useState(1000000);
  const [items, setItems] = useState<Services[]>([]);
  const [autocomplete, setAutocomplete] = useState<string[]>([]);

  interface CategoriesOptions {
    id: number | undefined;
    category_name: string;
  }
  const [servicecategory, setServiceCategory] = useState<CategoriesOptions[]>(
    []
  );

  const sortby = [
    { value: "recommended", text: t("sort_option.recommended") },
    { value: "popular", text: t("sort_option.popular") },
    { value: "asc", text: t("sort_option.ascend") },
    { value: "desc", text: t("sort_option.descend") },
  ];

  const handleSlider = (value: number[]) => {
    setMinprice(value[0]);
    setMaxprice(value[1]);
  };

  const fetchprice = async () => {
    const price = await ServiceAPI.maxprice();
    setMaxPriceDB(price.data);
    setMaxprice(price.data);
  };

  const ChangeSelectedcategory = (event: string) => {
    setSelectcategory(event);
  };

  const ChangeSortby = (event: string) => {
    setSelectsortby(event);
  };

  const fetchData = async (event = true) => {
    const response = await ServiceAPI.get(
      { ...pagination, page: event ? pagination.page + 1 : 1 },
      selectsortby,
      selectcategory,
      minprice,
      maxprice,
      searchtext
    );
    window.scrollTo(0, 0);
    setPagination(response.pagination); // ---------------------------------
    setItems((prevItems) => prevItems?.concat(response.data));
  };

  const searchData = async () => {
    setItems([]);
    fetchData(false);
  };

  const fetchAutoComplete = async (event: string) => {
    const response = await ServiceAPI.autocomplete(event);
    const data = response.data.map((event: Services) => event.service_name);
    setAutocomplete(data);
  };

  const fetchCategories = async () => {
    const response = await CategoriesAPI.get();
    setServiceCategory([
      { id: undefined, category_name: "" },
      ...response.data,
    ]);
  };

  useEffect(() => {
    (async () => {
      await fetchprice();
      setTimeout(() => {
        fetchData();
      }, 500);
      await fetchCategories();
    })();
    const resetScroll = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", resetScroll);

    return () => window.removeEventListener("beforeunload", resetScroll);
  }, []);

  const debounceFunction = useCallback(_debounce(fetchAutoComplete, 400), []);

  useEffect(() => {
    if (searchtext.length > 0) debounceFunction(searchtext);
  }, [searchtext]);

  return (
    <>
      <div className="flex flex-col pb-12">
        <div className="relative">
          <div className="list-image text-white">
            <div className="z-10 relative text-center py-[5rem]">
              <div className="font-medium text-[2rem]">{t("our_services")}</div>
              <div
                className="pt-[1.5rem] px-6"
                dangerouslySetInnerHTML={{
                  __html: t("banner_servicelistpage1"),
                }}
              ></div>
            </div>
          </div>
        </div>
        <StickyBox>
          <div
            className={
              "flex bg-white 2xl:px-52 lg:px-28 items-center justify-between py-2 flex-col lg:flex-row"
            }
          >
            <div>
              <AutoComplete
                placeholder={t("search_service_placeholder")}
                options={autocomplete}
                emptyMessage={t("no_service_message")}
                value={searchtext}
                onValueChange={(event) => {
                  setSearchText(event);
                }}
              ></AutoComplete>
            </div>
            <div className="w-full px-[5rem] lg:px-0 lg:w-[10rem]">
              <div className="text-[0.75rem] text-gray-700">
                {t("service_categories")}
              </div>
              <div>
                <Select
                  defaultValue={selectcategory}
                  onValueChange={(event) => {
                    ChangeSelectedcategory(event);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {servicecategory.map((category, index) => {
                      let className = "pl-2";
                      if (category.category_name == selectcategory) {
                        className += " text-blue-700";
                      }
                      return (
                        <SelectItem
                          key={index}
                          value={category.category_name}
                          className={className}
                        >
                          {category.category_name || t("category_all")}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full px-[5rem] lg:px-0 lg:w-[8rem]">
              <div className="text-[0.75rem] text-gray-700">{t("price")}</div>
              <div className="w-full cursor-pointer select-none">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex justify-between items-center pr-3 py-2">
                      <div>
                        {minprice}-{maxprice}฿
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="pb-6 px-6">
                    <div className="text-gray-700">
                      {minprice}-{maxprice}฿
                    </div>
                    <Slider
                      className="my-3"
                      onValueChange={handleSlider}
                      defaultValue={[minprice, maxprice]}
                      max={maxPriceDB}
                      step={1}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full px-[5rem] lg:px-0 lg:w-[14rem]">
              <div className="text-[0.75rem] text-gray-700">{t("sortby")}</div>
              <div>
                <Select
                  defaultValue={selectsortby}
                  onValueChange={(event) => {
                    ChangeSortby(event);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortby.map((category, index) => {
                      let className = "pl-2";
                      if (category.value == selectsortby) {
                        className += " text-blue-700";
                      }
                      return (
                        <SelectItem
                          key={index}
                          value={category.value}
                          className={className}
                        >
                          {category.text}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={searchData} className="px-8 py-6">
              {t("search")}
            </Button>
          </div>
        </StickyBox>
      </div>
      <div>
        {items.length > 0 ? (
          <InfiniteScroll
            className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-14 gap-6 lg:px-[6rem] lg:pb-20 pb-10 px-4"
            dataLength={items?.length || 0}
            next={() => {
              // setPagination((prevItems) => ({
              //   ...prevItems,
              //   page: prevItems.page + 1,
              // }));
              fetchData();
            }}
            hasMore={pagination.page < (pagination.totalPage || 0)}
            loader={<div />}
            scrollThreshold={0.4}
          >
            {items?.map((list, index) => (
              <div key={index} className="flex">
                <ProductCard items={list} />
              </div>
            ))}
          </InfiniteScroll>
        ) : (
          <div className="w-full text-red-600 text-center mb-8">
            {t("no_service_message")}
          </div>
        )}
      </div>
      <div className="footerLogo xl:px-[25rem] xl:py-[8rem] px-[16px] py-[32px] ">
        <div className="relative">
          <div className="opacity-image"></div>
        </div>
        <div className="flex justify-center w-full">
          <div
            className="text-white text-center text-[1.25rem] pb-[1.5rem]"
            dangerouslySetInnerHTML={{ __html: t("servicelist_footer") }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Servicelistpage;
