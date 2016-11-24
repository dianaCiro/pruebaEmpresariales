import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  //namespace: 'restaurants',
  host: 'https://restaurant-node.herokuapp.com/api'


});

/**host: "https://restaurants-udea-soft.herokuapp.com",
headers: {
  'Content-Type': 'application/json'
  //'X-Requested-With': 'XMLHttpRequest'
  },
ajax(url, method, hash) {
  console.log("(adapter restaurant ajax): entrando a metodo ajax");
  if (ENV.APP.usingCors) {
    console.log("(adapter restaurant ajax): app esta usando cors");
    console.log("(adapter restaurant ajax): valores de hash = " + JSON.stringify(hash));
    if (hash === undefined) { hash = {}; }
    hash.crossDomain = true;
    console.log("(adapter restaurant ajax): valores nuevos de hash = " + JSON.stringify(hash));
    console.log("(adapter restaurant ajax): setting hash.crossDomain = " + hash.crossDomain);
    if (ENV.APP.corsWithCreds) {
      console.log("(adapter restaurant ajax): app has cors with credentials");
      console.log("(adapter restaurant ajax): old hash.xhrFields values = " + JSON.stringify(hash.xhrFields));
      hash.xhrFields = { withCredentials: true };
      console.log("(adapter restaurant ajax): new hash.xhrFields values =" + JSON.stringify(hash.xhrFields));
    }
  }
  return this._super(url, method, hash);
}
*/
