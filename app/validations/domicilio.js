import{
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
}from 'ember-changeset-validations/validators';

export default {
  address: [
    validatePresence({presence:true, message: 'Se requiere direccion del lugar del domicilio'}),
    validateLength({min: 6, message: ' Tamaño la direccion no valido'})
  ],
  phone: {presence: true, message: 'telefono requerido'},
  user_restaurant:{presence: true, message: 'Usuario del restaurante requerido'}
};
