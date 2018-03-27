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
        numberOfApple: 0 //Math.floor((Math.random() * 3))
    },

    methods: {
        addApple: function(){
            this.numberOfApple += 1;
            this.hasApple = true;
        }
    },

    computed: {
        hasApple:{
            get: function() {
                return this.numberOfApple > 0;
            },
            set: function(value) {
                // using setter in computed property is a great way to impose validation on values.
                if(this.numberOfApple > 10){
                    console.log("Basket is full");
                    this.numberOfApple = 10;
                }

            }
        }
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
