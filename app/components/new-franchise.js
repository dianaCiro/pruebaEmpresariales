import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      save(){
      console.log("(component new-franchise.js save()): entrando a save() de component");
        $('#form-create div.form-group').removeClass('has-error'); //quita clase has-error en divs form-group
        document.getElementById('errors').style.display = 'none'; //esconde errores div
        if(this.get('changeset', 'isValid')){
          var promise = this.attrs.save(this.get('changeset'));
          promise.then(function(){
            console.log("(component new-franchise.js save()): promise devuelto por controller save() = "+JSON.stringify(promise));
            var errorAttr = promise._result.campos[0];
            console.log("(component new-franchise.js save()): valor de errorAttr = " +errorAttr);
            document.getElementById('errors').style.display = 'block';
            $('.errors-container').html('Ya existe un usuario con este '+errorAttr);
            $('#'+errorAttr).addClass('has-error');
          });
        }else{
          console.log("(component new-franchise.js save()): record no valido");
        }
      },
      rollback(){
          this.attrs.rollback(this.get('changeset'));
      }
  }
});
