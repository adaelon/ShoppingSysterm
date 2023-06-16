

import axios from '../utils/axios'

export function getHome() {
  return axios.get('/index-infos');
}

export function getGoods() {
  return axios.get('/goods/list');
}
