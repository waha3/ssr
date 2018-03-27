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
      recommendList: json,
      isServer
    };
  }

  constructor(props) {
    super(props);
    const { isServer, lastUpdate } = props;
    this.store = initStore(isServer, lastUpdate);
  }

  render() {
    const { recommendList } = this.props;
    return (
      <Provider store={this.store}>
        <div className="root">
          <Category
            recommendList={recommendList}
          />
        </div>
      </Provider>
    );
  }
}

