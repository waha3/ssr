import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Category extends Component {
  handleChange = () => {}

  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={this.handleChange}>
        <TabPane tab="Tab 1" key="1">推荐音乐</TabPane>
        <TabPane tab="Tab 2" key="2">热歌榜</TabPane>
        <TabPane tab="Tab 3" key="3">搜索</TabPane>
      </Tabs>
    );
  }
}
