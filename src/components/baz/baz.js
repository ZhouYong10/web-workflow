/**
 * Created by Administrator on 2015/12/21.
 */



var Vue = require('vue');

module.exports = Vue.extend({
    template: __inline('./baz.html'),
    route: {
        canReuse: function() {
            console.log('canRuse Baz');
        },
        canDeactivate: function() {
            console.log('canDeactivate Baz');
        },
        canActivate: function() {
            console.log('canActivate Baz');
        },
        deactivate: function() {
            console.log('deactivate Baz');
        },
        activate: function() {
            console.log('activate Baz');
        },
        data: function() {
            console.log('data Baz');
        }
    }
});