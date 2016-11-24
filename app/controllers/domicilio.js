
import Ember from 'ember';
import DomicilioValidations from '../validations/domicilio';

const { computed } = Ember;

var res;
export default Ember.Controller.extend({
	DomicilioValidations,
	actions: {
    save:function(changeset){
      var promise = changeset.save().then(result=>{
        var payload = result.store.payload;
        if(payload.tipo != 'Error'){
          sessionStorage.setItem("creation",changeset.get('user_restaurant'));
          this.transitionToRoute('created-domicilio');
        }else{
          return payload;
        }
			}); 
      return promise;    
    },
    rollback:function(changeset){
      changeset.rollback();
    }
  }
});
