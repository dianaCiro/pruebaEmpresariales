import DS from 'ember-data';

export default DS.Model.extend({
    name_franchise:DS.attr(),
    restaurant:DS.attr(),
    address:DS.attr(),
    city: DS.attr(),
    phone: DS.attr(),
    latitude: DS.attr(),
    longitude: DS.attr(),
    open_time_week: DS.attr(),
    close_time_week: DS.attr(),
    open_time_weekend: DS.attr(),
    close_time_weekend: DS.attr(),
    photos: DS.attr() //maneja el array http://stackoverflow.com/a/26107853/4358930
});
/**{
  "name_franchise":"Subway Ruta N",
  "restaurant":1,
  "address":"Calle falsa 123",
  "city":1,
  "phone":"1234567",
  "latitude":6.2441234,
  "longitude":-75.345234,
  "open_time_week":"10:00",
  "close_time_week":"20:00",
  "open_time_weekend":"11:00",
  "close_time_weekend":"21:00",
  "photos":[
    "url1",
    "url2",
    "url3"
  ]
}*/
