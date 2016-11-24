import DS from 'ember-data';

export default DS.Model.extend({
  id_table_restaurant: DS.attr(),
  franchise: DS.attr(),
  capacity: DS.attr(),
  available: DS.attr()
});
