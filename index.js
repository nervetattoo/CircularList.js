'use strict';

(function (root, def) {
    if (typeof exports === 'object')
        module.exports = def();
    else if (typeof define === 'function' && define.amd)
        define(def());
    else
        root.CircularList = def();
}(this, function() {
    var CircularList = function CircularList(nodes) {
        this.reset(nodes);
    }

    CircularList.prototype.reset = function(nodes) {
        this.index = null;
        this.nodes = nodes.slice(0);
        this.length = this.nodes.length;
        this.max = this.nodes.length - 1;
        return this.length;
    };

    CircularList.prototype.first = function() {
        this.index = 0;
        return this.nodes[this.index];
    };

    CircularList.prototype.last = function() {
        this.index = this.max;
        return this.nodes[this.index];
    };

    CircularList.prototype.next = function() {
        if (this.index === null) this.index = 0;
        else if (++this.index > this.max) this.index = 0;
        return this.nodes[this.index];
    };

    CircularList.prototype.prev = function() {
        if (this.index === null) this.index = this.max;
        else if (--this.index < 0) this.index = this.max;
        return this.nodes[this.index];
    };

    CircularList.prototype.toArray = function() {
        return this.nodes;
    };

    return CircularList;
}));
