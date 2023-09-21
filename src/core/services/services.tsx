import $axios from "@/core/config/axios-instance";
import { Pagination } from "../types/pagination";

class services {
  get = async (
    pagination: Pagination,
    sort = "asc",
    category = "",
    minprice = 0,
    maxprice = 1000000,
    search = ""
  ) => {
    const response = await $axios.get("v1/user/services", {
      params: {
        page: pagination.page,
        pageSize: pagination.pageSize,
        sort,
        category,
        minprice,
        maxprice,
        search,
      },
    });
    return response.data;
  };
  autocomplete = async (search = "") => {
    const response = await $axios.get("v1/user/services", {
      params: { search },
    });
    return response.data;
  };
}

export default new services();
