/**
 * Created by Administrator on 2015/12/21.
 */

var Vue = require('vue');
var VueValidator = require('vue-validator');
Vue.use(VueValidator);

// register custom validator
Vue.validator('email', function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})

new Vue({
    el: '#app',
    data: {
        email: ''
    }
})