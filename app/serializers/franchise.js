import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  serialize(snapshot, options) {
      var json = this._super(...arguments);

      console.log("(serializer franchise serialize()): franquicia: " + JSON.stringify(json));

      var result = {
        "name_franchise":json.name_franchise,
        "restaurant":json.restaurant,
        "address":json.address,
        "city":json.city,
        "phone":json.phone,
        "latitude":json.latitude,
        "longitude":json.longitude,
        "open_time_week":json.open_time_week,
        "close_time_week":json.close_time_week,
        "open_time_weekend":json.open_time_weekend,
        "close_time_weekend":json.close_time_weekend,
        "photos":json.photos
      };

      console.log("(serializer franchise serialize()): franquicia result: " + JSON.stringify(result));

      return result;
    },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    store.payload = payload;
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
