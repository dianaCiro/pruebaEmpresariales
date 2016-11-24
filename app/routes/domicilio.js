import Ember from 'ember';

export default Ember.Route.extend({
	 model() {
    return Ember.RSVP.hash({
      domicilio: return this.store.createRecord('domicilio'),
      menu: this.store.findAll('menu')
    });
  }
});
