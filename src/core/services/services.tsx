import $axios from "@/core/config/axios-instance";
import { Pagination } from "../types/pagination";

class services {
  get = async (pagination: Pagination) => {
    const response = await $axios.get("v1/user/services", {
      params: { page: pagination.page, pageSize: pagination.pageSize },
    });
    return response.data;
  };
}

export default new services();
