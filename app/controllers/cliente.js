
import Ember from 'ember';
import ClienteValidations from '../validations/cliente';
const { computed } = Ember;

var res;
export default Ember.Controller.extend({
	ClienteValidations,
	actions: {
    save:function(changeset){
      var promise = changeset.save().then(result=>{
        var payload = result.store.payload;
        if(payload.tipo != 'Error'){
          sessionStorage.setItem("creation",changeset.get('username'));
          this.transitionToRoute('created-cliente');
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
