import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
   		return this.store.createRecord('cliente');
  	},

    setupController: function(controller, model) {
        controller.set('newCliente', model);
    },
});
