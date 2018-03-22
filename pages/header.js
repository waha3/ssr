import React, { Component } from 'react';
import { Head } from 'next';

export default class Header extends Component {
  render() {
    console.log(this.props)
    const { chidren } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://unpkg.com/antd@3/dist/antd.min.css" />
        </Head>
        {chidren}
      </div>
    );
  }
}
