import {Types} from '../constants/cart'

export * from './base/user'

export function increaseCount (item) {
  const {id, sizeId, count} = item

  return {
    url: `/mall/cart/${id}`,
    data: {count: count + 1, sizeId},
    method: 'PUT',
    type: Types.CART_INC_COUNT
  }
}

export function decreaseCount (item) {
  const {id, sizeId, count} = item

  return {
    url: `/mall/cart/${id}`,
    data: {count: count - 1, sizeId},
    method: 'PUT',
    type: Types.CART_DES_COUNT
  }
}

export function updateCount (data) {
  const {id, sizeId, count} = data

  return {
    url: `/mall/cart/${id}`,
    data: {count: count, sizeId},
    method: 'PUT',
    type: Types.CART_UPDATE_COUNT
  }
}

export function deleteItem (item) {
  const {id, sizeId} = item

  return {
    url: `/mall/cart/${id}`,
    data: {sizeId},
    method: 'DELETE',
    type: Types.CART_DEL_ITEM
  }
}

export function fetchCart () {
  return {
    url: '/mall/cart',
    method: 'GET',
    params: {test: 123},
    type: Types.GET_SERVER_CARTS
  }
}

export function addCart (goods) {
  const {sizeId} = goods

  return {
    url: '/mall/cart',
    method: 'POST',
    data: {goodsId: goods.id, sizeId},
    type: Types.ADD_SERVER_CART
  }
}

export function switchPanel (payload) {
  return {type: Types.SWITCH_PANEL, payload}
}
