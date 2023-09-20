export interface Services {
  id: number;
  service_name: string;
  category_id: number;
  pic_service: string;
  createAt: string;
  updateAt: string;
  category: string;
  min_price: number | null;
  max_price: number | null;
}
