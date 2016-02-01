/**
 * Created by Administrator on 2015/12/21.
 */

var VueResource = require('vue-resource');
var VueAsyncData = require('vue-async-data');


var Vue = require('vue');
var VueRouter = require('vue-router');
var VueValidator = require('vue-validator');
Vue.use(VueRouter);
Vue.use(VueValidator);

var test = require('./test');
test.say(' modjs !!!!!!!!!!!!!!!!1111');

$('#loadBtn').click(function () {
    require(['testAsync'], function (test) {
        console.log(test, '--------------------------------------------');
        test.load();
    })
});

layer.msg('遍匈紗墮阻。。。。。。。。。。。。');

var router = new VueRouter();

router.map({
    '/foo': {
        component: (resolve) => require(['foo'], resolve),
        subRoutes: {
            '/:username': {
                component: {
                    template: '<h3>Default sub view for Foo.  /foo{{$route.params.username}}</h3>'
                }
            },
            '/bar': {
                component: (resolve) => require(['bar'], resolve)
            },
            '/baz': {
                component: (resolve) => require(['baz'], resolve)
            }
        }
    }
});


var App = Vue.extend({
    data: function() {
        return {message: 'Hello Vue.js'};
    }
});

router.start(App, '#app');

