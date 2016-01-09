/**
 * Created by Administrator on 2015/12/21.
 */



var Vue = require('vue');

module.exports = Vue.extend({
    template: __inline('./bar.html'),
    route: {
        canReuse: function() {
            console.log('canRuse Bar');
        },
        canDeactivate: function() {
            console.log('canDeactivate Bar');
        },
        canActivate: function() {
            console.log('canActivate Bar');
        },
        deactivate: function() {
            console.log('deactivate Bar');
        },
        activate: function() {
            console.log('activate Bar');
        },
        data: function() {
            console.log('data Bar');
        }
    }
});