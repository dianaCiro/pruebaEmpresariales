import DS from 'ember-data';

export default DS.Model.extend({
      id_reservation: DS.attr(),
      user_restaurant: DS.attr(),
      table_restaurant: DS.attr(),
      date_init: DS.attr(),
      date_end: DS.attr(),
      amount_people: DS.attr(),
      state: DS.attr(),
      table: DS.attr('table'),
      franchise: DS.attr('franchise')
});
