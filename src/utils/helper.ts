// const { API, searchEndpoint, apiKey, requestParams = {} } = require('../config.json');
const get = require('lodash.get');
const mock = require('./response.json');

export interface IResponse {
  [index: number]: {
    id: string,
    thumbnail: string,
    title: string
  }
}

export const requestYoutube = (query: string) => {
  // const params = new URLSearchParams(requestParams).toString();
  return new Promise<IResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve(getDataFromItems(mock.items));
    }, 500);
    // fetch(`${API}${searchEndpoint}?q=${query}&${params}&key=${apiKey}`).then((res) => res.json())
    //   .then((response) => {
    //     resolve(getDataFromItems(response.items));
    //   }, (error) => {
    //     reject(error);
    //   })
  })
}

const getDataFromItems = (items: object[]) => {
  return items.map((item) => {
    const id: string = get(item, 'id.videoId', '');
    const thumbnail: string = get(item, 'snippet.thumbnails.high.url', '');
    const title: string = get(item, 'snippet.title', '');

    return {
      id,
      thumbnail,
      title
    }
  })
}