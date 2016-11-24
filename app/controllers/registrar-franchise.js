import Ember from 'ember';
import validations from '../validations/franchiseValids';

export default Ember.Controller.extend({
  validations,
  actions: {
    save(changeset){
      console.log("(Controller registrar-franchise save()): json en controller:" + JSON.stringify(changeset)); //estructura del changeset
      console.log("(Controller registrar-franchise save()): nombre franquicia en controller:" + changeset.get('name_franchise')); //como tomar valores del changeset

      var promise = changeset.save().then(result=>{
        var payload = result.store.payload;
        console.log("(Controller registrar-franchise save()): payload obtenido:" + JSON.stringify(payload));
        if(payload.tipo != 'Error'){
          //Logica si da error el metodo
          /**sessionStorage.setItem("creation",changeset.get('username'));
          this.transitionToRoute('created-cliente');*/
          console.log("(Controller registrar-franchise save()): tipo de payload = " + payload.tipo);
        }else{
          return payload;
        }
      });

      console.log("(Controller registrar-franchise save()): promise a responder:" + JSON.stringify(promise));
      return promise;
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});
