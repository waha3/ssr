import React, { Component } from 'react';
// import Link from 'next/link';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';
import { Tabs, Card } from 'antd';

const TabPane = Tabs.TabPane;
const { Meta } = Card;

@inject('store')
@observer
export default class Category extends Component {
  handleChange = () => {}

  render() {
    const {
      store: {
        personalizedList
      }
    } = this.props;
    return (
      <Tabs defaultActiveKey="1" onChange={this.handleChange}>
        <TabPane tab="推荐音乐" key="1">
          {
            personalizedList.map(item => (
              <Card
                onClick={() => Router.push({
                  pathname: '/list',
                  query: {
                    playlist_id: item.id
                  }
                })}
                key={item.id}
                cover={
                  <img src={item.picUrl} alt=""/>
                }
              >
                <Meta
                  title={item.name}
                  description={item.copywriter}
                />
              </Card>
            ))
          }
        </TabPane>
        <TabPane tab="热歌榜" key="2">{''}</TabPane>
        <TabPane tab="搜索" key="3">{''}</TabPane>
      </Tabs>
    );
  }
}
