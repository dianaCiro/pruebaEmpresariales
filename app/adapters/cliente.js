import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://haskell-rest.herokuapp.com',
	headers: {
		'Content-Type': 'text/plain'
  	}
});
