import DS from 'ember-data';
//import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey :'id_restaurant',
  serialize(snapshot, options) {
	    var json = this._super(...arguments);

	    console.log("restaurant: " + JSON.stringify(json));

      var result = {
        "name_restaurant":json.name_restaurant,
        "description":json.description,
        "email":json.email,
        "admin":json.admin
      };

    	return result;
  	},
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		store.payload = payload;
	    return this._super(store, primaryModelClass, payload, id, requestType); //convert classic json in json API Format
  	}
});
