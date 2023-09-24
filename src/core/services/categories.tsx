import $axios from "@/core/config/axios-instance";

class categories {
  get = async () => {
    const response = await $axios.get("v1/user/categories");
    return response.data;
  };
}

export default new categories();
