import { observable, action } from 'mobx';
import MusicApi from './api/index.js';

let store = null;

class Store {
  @observable personalizedList = [];

  constructor(isServer, recommendList) {
    this.personalizedList = [...recommendList];
  }

  @action('获取歌单详情')
  getPlaylistAction = async (id) => {
    const res = await MusicApi.getPlaylist(id);
    console.log(res);
  }
}

export function initStore(isServer, recommendList = []) {
  if (isServer) {
    return new Store(isServer, recommendList);
  } else {
    if (store === null) {
      store = new Store(isServer, recommendList);
    }
    return store;
  }
}
