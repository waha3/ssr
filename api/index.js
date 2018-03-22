const setPath = (path) => (target, key, descriptor) => {
  console.log(target, key, descriptor);
};

@setPath()
export default class MusicApi {
  static getRecommendSongList() {
    return '/personalized';
  }

  static mobileLogin(cellphone, password) {
    return `/login?${cellphone}&${password}`;
  }
}


