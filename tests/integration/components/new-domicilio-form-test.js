import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-domicilio-form', 'Integration | Component | new domicilio form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-domicilio-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-domicilio-form}}
      template block text
    {{/new-domicilio-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
