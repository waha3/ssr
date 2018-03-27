import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Category extends Component {
  handleChange = () => {}

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.handleChange}>
        <TabPane tab="推荐音乐" key="1">{''}</TabPane>
        <TabPane tab="热歌榜" key="2">{''}</TabPane>
        <TabPane tab="搜索" key="3">{''}</TabPane>
      </Tabs>
    );
  }
}
