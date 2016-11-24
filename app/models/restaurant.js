import DS from 'ember-data';

export default DS.Model.extend({
  id_restaurant: DS.attr(),
  name_restaurant: DS.attr(),
  description: DS.attr(),
  admin: DS.attr(),
  email: DS.attr()
});
