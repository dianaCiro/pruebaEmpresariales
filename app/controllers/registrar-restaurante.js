import Ember from 'ember';
import validations from '../validations/restaurantValids';

export default Ember.Controller.extend({
  validations,
  actions: {
    save(changeset){
      console.log("json en controller:" + JSON.stringify(changeset)); //estructura del changeset
      console.log("nombre restaurante en controller:" + changeset.get('name_restaurant')); //como tomar valores del changeset

      var promise = changeset.save().then(result=>{
        var payload = result.store.payload;
        console.log("(Controller registrar-restaurante save()): payload obtenido:" + JSON.stringify(payload));
        if(payload.tipo != 'Error'){
          //Logica si da error el metodo
          /**sessionStorage.setItem("creation",changeset.get('username'));
          this.transitionToRoute('created-cliente');*/
          console.log("(Controller registrar-restaurante save()): tipo de payload = " + payload.tipo);
        }else{
          return payload;
        }
      });

      console.log("(Controller registrar-restaurante save()): promise a responder:" + JSON.stringify(promise));
      return promise;
    },
    rollback(changeset){
      changeset.rollback();
    }
  }
});

/**
//changeset manipulado para utilizar en pruebas. Simple Json Data para enviar
var restaurant = {
    name_restaurant: changeset.get('name_restaurant'),
    description: changeset.get('description'),
    email: changeset.get('email'),
    admin:  changeset.get('admin')
};
//Intento con Simple XMLHttpRequest, resultado: 403
var request = new XMLHttpRequest();
var url = 'https://restaurants-udea-soft.herokuapp.com/restaurants';
request.open('POST', url, true);
request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
//request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//request.setRequestHeader("Content-length", restaurant.length);
//request.setRequestHeader("Connection", "close");
request.send(restaurant);

// Intento 2: con ajax
console.log("Convierte changeset a un json valido para llamada ajax. " + JSON.stringify(restaurant));
$.ajax({
    url: 'https://restaurants-udea-soft.herokuapp.com/restaurants',
    method: 'POST',
    data: restaurant,
    dataType: "json",
    contentType: "application/json;charset=utf-8",
    crossDomain: "true"
    }
)
.done(function(data){
    console.log(data);
});*/
