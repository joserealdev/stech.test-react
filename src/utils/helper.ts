// const { API, searchEndpoint, apiKey, requestParams = {} } = require('../config.json');
const mock = require('./response.json');

export const requestYoutube = (query: string) => {
  // const params = new URLSearchParams(requestParams).toString();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mock);
    }, 2000);
    // fetch(`${API}${searchEndpoint}?q=${query}&${params}&key=${apiKey}`).then((res) => res.json())
    //   .then((response) => {
    //     resolve(response);
    //   }, (error) => {
    //     reject(error);
    //   })
  })
}
