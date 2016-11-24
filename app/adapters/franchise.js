import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://restaurants-udea-soft.herokuapp.com',
  headers: {
    'Content-Type': 'text/plain'
    }
});
