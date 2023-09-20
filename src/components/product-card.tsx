import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Services } from "@/core/types/services";
import { useNavigate } from "react-router-dom";

export default function productCard({ items }: { items: Services }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const gotoservicedetail = () => {
    navigate("/service/" + items.id);
  };
  const minPrice = items.min_price || 0;
  const maxPrice = items.max_price || 0;
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src="https://picsum.photos/400/300" alt="Image" className="w-full" />
      <div className="p-4 bg-white h-full">
        <Badge variant="blue" className="py-1 text-[0.75rem]">
          {items.category}
        </Badge>
        <div className="text-gray-950 text-[1.25rem] pt-2">
          {items.service_name}
        </div>
        {minPrice > 0 && (
          <div className="text-gray-700 text-[0.875rem] flex items-center pb-2">
            <Tag className="w-[1rem] mr-2" />
            {t("average_price")} {minPrice}{" "}
            {maxPrice && maxPrice > minPrice ? `- ${maxPrice}` : ""} ฿
          </div>
        )}

        <Button
          variant="link"
          className="underline text-blue-600 px-0"
          onClick={gotoservicedetail}
        >
          {t("service_selection")}
        </Button>
      </div>
    </div>
  );
}
