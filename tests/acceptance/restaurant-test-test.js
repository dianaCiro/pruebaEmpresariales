import { test } from 'qunit';
import moduleForAcceptance from 'busqueda-restaurante/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | restaurant test');

test('debe buscar restaurantes por nombre', function (assert) {
});

test('debe buscar restaurantes por ubicacion geografica.', function (assert) {
});

test('debe buscar restaurantes por puntuacion.', function (assert) {
});

test('debe buscar restaurantes por tipo de cocina.', function (assert) {
});

test('debe buscar restaurantes por rango de precios.', function (assert) {
});

test('debe buscar restaurantes de acuerdo a mi ubicacion geografica', function (assert) {
});

test('debe visualizar ubicacion geografica de restaurantes', function (assert) {
});

test('debe mostrar todos los restaurantes', function (assert) {
	visit('/busqueda');
  	andThen(function () {
    assert.equal(find('.listing').length, 3, 'deben haber 3 restaurantes listados');
  });
});