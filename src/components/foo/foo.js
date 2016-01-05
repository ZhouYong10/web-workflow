/**
 * Created by Administrator on 2015/12/21.
 */

var Vue = require('vue');

module.exports = Vue.extend({
    template: __inline('./foo.html'),
    route: {
        canReuse: function() {
            console.log('canRuse Foo');
        },
        canDeactivate: function() {
            console.log('canDeactivate Foo');
        },
        canActivate: function() {
            console.log('canActivate Foo');
        },
        deactivate: function() {
            console.log('deactivate Foo');
        },
        activate: function() {
            console.log('activate Foo');
        },
        data: function() {
            console.log('data Foo');
        }
    }
});