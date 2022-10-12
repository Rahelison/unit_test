var assert = require('assert')
describe('hello', function(nombre1, nombre2) {
    nombre1 = 5;
    nombre2 = 6;
    z = nombre1 + nombre2;
    it('Bon', function() {
        assert.equal(z, 11)
    })
    return z;
})
describe('Bonjour', function(nombre1, nombre2) {
    nombre1 = 0;
    nombre2 = 1;
    a = nombre1 + nombre2;
    it('Bon', function() {
        assert.equal(a, 1)
    })
    return a;

})