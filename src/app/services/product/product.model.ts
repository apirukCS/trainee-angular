export interface ResponseProduct{
    data : Product[],
    limit: number,
    page: number,
    total: number,
}
export interface Product {
    id: number;
    product_id: number;
    product_category_id: number;
    product_sub_category_id: number;
    name: string;
    image_url: string;
    is_recommend: boolean;
    price: number;
    is_sell_by_weight: boolean;
    is_has_option: boolean;
    is_has_topping: boolean;
    is_available: boolean;
  }