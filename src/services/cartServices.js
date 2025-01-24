import apiClient from "../utils/api-client";

//제품 id와 수량을 DB에 저장
export function addToCartAPI(id, quantity) {
  return apiClient.post(`/cart/${id}`, { quantity });
}

//유저별로 저장된 카트정보를 가져오기
export function getCartAPI() {
  return apiClient.get("/cart");
}

//장바구니에 제품 삭제하기
export function removeFromCartAPI(id) {
  return apiClient.patch(`/cart/remove/${id}`);
}

//장바구니 상품의 수량 증가/감소
export function increaseProductAPI(id) {
  return apiClient.patch(`/cart/increase/${id}`);
}

export function decreaseProductAPI(id) {
  return apiClient.patch(`/cart/decrease/${id}`);
}
