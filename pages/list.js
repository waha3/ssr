import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';

// @inject('store')
// @observer
export default class SongList extends Component {
  async componentDidMount() {
    const {
      url: {
        query: {
          playlist_id
        }
      }
    } = this.props;
  }

  render() {
    return (
      <div className="song_List">
        hello world
      </div>
    );
  }
}
