import {
  validatePresence,
  validateLength,
  validateNumber,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  name_restaurant: [
    validatePresence({
      presence: true,
      message: 'Se requiere nombre de restaurante'
    }),
    validateLength({
      max: 20,
      message: ' Tamaño del nombre de restaurante demasiado largo'
    })
  ],
  email: [
    validatePresence({
      presence: true,
      message: 'Email requerido'
    }),
    validateFormat({
      type: 'email',
      message: ' Email no válido'
    }),
    validateLength({
      max: 40
    })
  ],
  admin: [
    validatePresence({
      presence: true,
      message: 'Se requiere id de un administrador'
    }),
    validateNumber({
      integer: true,
      positive: true,
      message: ' Id no válido'
    })
  ],
  description: [
    validateLength({
      max: 140,
      allowBlank: true,
      message: 'La descripción excede el número máximo de carácteres permitidos'
    })
  ]
}
