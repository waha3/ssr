import React, { Component } from 'react';

// import Link from 'next/link';
import Category from '../component/tab.js';
import MusicApi from '../api/index.js';
import Header from './header.js';
// import 'antd/dist/antd.less';

export default class Root extends Component {
  static async getInitialProps() {
    MusicApi.getRecommendSongList();
    return {};
  }

  componentDidMount() {}

  render() {
    return (
      <Header>
        <div className="root">
          <Category />
        </div>
      </Header>
    );
  }
}

