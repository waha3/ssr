import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store.js';
import Category from '../component/tab.js';
import MusicApi from '../api/index.js';
import '../less/app.less';

export default class Root extends Component {
  static async getInitialProps({req}) {
    const isServer = !!req;
    const res = await MusicApi.getRecommendSongList();
    const json = await res.json();
    return {
      recommendList: json.result,
      isServer
    };
  }

  constructor(props) {
    super(props);
    const { isServer, recommendList } = props;
    this.store = initStore(isServer, recommendList);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="root">
          <Category />
        </div>
      </Provider>
    );
  }
}

