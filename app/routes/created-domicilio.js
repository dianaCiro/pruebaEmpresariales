import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (sessionStorage.creation == undefined) {
      this.transitionTo('domicilio');
    }
  }
});
