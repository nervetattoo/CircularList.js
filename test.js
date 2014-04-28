var assert = require('assert');
var CircularList = require('./index');

var data = [1, 2, 3];

describe('clist', function() {
    it('should support prev', function() {
        var cl = new CircularList(data);
        assert.equal(1, cl.next());
        assert.equal(2, cl.next());
        assert.equal(3, cl.next());
        assert.equal(1, cl.next());
    });

    it('should support prev', function() {
        var cl = new CircularList(data);
        assert.equal(3, cl.prev());
        assert.equal(2, cl.prev());
        assert.equal(1, cl.prev());
        assert.equal(3, cl.prev());
    });

    it('should support first/last', function() {
        var cl = new CircularList(data);
        assert.equal(1, cl.first());
        assert.equal(3, cl.last());
    });

    it('should support reset', function() {
        var cl = new CircularList(data);
        cl.reset(cl.toArray().slice(1));
        assert.equal(2, cl.length);
        assert.equal(2, cl.next());
    });
});
