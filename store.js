import { observable } from 'mobx';

let store = null;

class Store {
  @observable lastUpdate = 0;

  constructor(isServer, lastUpdate) {
    this.lastUpdate = lastUpdate;
  }
}

export function initStore(isServer, lastUpdate = Date.now()) {
  if (isServer) {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}
