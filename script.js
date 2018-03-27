// var app = new Vue({
//     el: '#app',
//     data: {
//         appName: 'Root'
//     }
// });

var appCool = new Vue({
    el: '#appCool',

    data: {
        appName: 'AppCool',
        headerClass: 'header',
        fontClass: 'fontStyle',
        keyword:'',
        isChecked: false,
        selectedValues:[],
        selectedOption:'orange'
    },

    beforeCreate: function(){
        // alert('appCool before create');
    },

    created: function(){
        // alert('appCool created');
    },

    beforeMount: function(){
        // alert('appCool before mount');
    },

    mounted: function(){
        // alert('appCool mounted');
    },

    beforeUpdate: function(){
        // alert('appCool before update');
        console.log("isChecked is changed to " + this.isChecked);
    },

    updated: function(){
        // alert('appCool updated');
    },
});

var tiger = new Vue({
    el: '#tiger',
    data: {
        appName: 'Tiger',
        numberOfApple: Math.floor((Math.random() * 3))
    },

    method: {

    },

    beforeCreate: function(){
        // alert('tiger before create');
    },

    created: function(){
        // alert('tiger created');
    },

    beforeMount: function(){
        // alert('tiger before mount');
    },

    mounted: function(){
        // alert('tiger mounted');
    },

    beforeUpdate: function(){
        // alert('tiger before update');
    },

    updated: function(){
        // alert('tiger updated');
    },
});
