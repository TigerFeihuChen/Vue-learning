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
        keyword: '',
        isChecked: false,
        selectedValues: [],
        selectedOption: 'orange'
    },

    beforeCreate: function() {
        // alert('appCool before create');
    },

    created: function() {
        // alert('appCool created');
    },

    beforeMount: function() {
        // alert('appCool before mount');
    },

    mounted: function() {
        // alert('appCool mounted');
    },

    beforeUpdate: function() {
        // alert('appCool before update');
        console.log("isChecked is changed to " + this.isChecked);
    },

    updated: function() {
        // alert('appCool updated');
    },
});

var tiger = new Vue({
    el: '#tiger',
    data: {
        appName: 'Tiger',
        numberOfApple: 0,
        accountData: [
            { accountName: 'Tiger Chen', balance: 12000, accountType: 'Orange everyday' },
            { accountName: 'Cherie Liu', balance: 5000, accountType: 'Saving Maximiser' },
            { accountName: 'Emma Chen', balance: 125000, accountType: 'Term deposie', termInMonth: 24 },
            { accountName: 'Natalie Chen', balance: 126000, accountType: 'Term deposie', termInMonth: 12 },
            { accountName: 'River Yang', balance: 2200000, accountType: 'Home loan', loanTermInMonth: 480 },
            { accountName: 'Hong Zhang', balance: 88000.55, accountType: 'Orange everyday' },
            { accountName: 'Lebron James', balance: 89000000, accountType: 'Orange everyday' },
            { accountName: 'Stephe Curry', balance: 66688000.89, accountType: 'Orange everyday' },
            { accountName: 'Ryan Carney', balance: 900987445, accountType: 'Personal loan' }
        ],
        accounts: [],
        selectedType: 'All types'
    },

    methods: {
        addApple: function() {
            this.numberOfApple += 1;
            this.hasApple = true;
        },

        reduceApple: function() {
            this.numberOfApple -= 1;
        },

        filterTypeAccountType: function(selectedType) {
            if (selectedType !== 'All types') {
                this.accounts = this.accountData.filter(function(item) {
                    return item.accountType === selectedType;
                });
            }
            else{
                this.accounts = this.accountData;
            }
        }
    },

    computed: {
        hasApple: {
            get: function() {
                if (this.numberOfApple < 0) {
                    console.log("Basket is empty");
                    this.numberOfApple = 0;
                }
                return this.numberOfApple > 0;
            },
            set: function(value) {
                // using setter in computed property is a great way to impose validation on values.
                if (this.numberOfApple > 10) {
                    console.log("Basket is full");
                    this.numberOfApple = 10;
                }

            }
        },

        accountTypeList: function() {
            var distinctTypes = this.accountData.map(item => item.accountType)
                .filter((value, index, self) => self.indexOf(value) === index)

            if (distinctTypes.length > 0) {
                distinctTypes.splice(0, 0, 'All types');
            }

            return distinctTypes;
        }
    },

    watch: {
        selectedType: function(newValue) {
            if (newValue) {
                this.filterTypeAccountType(newValue);
            }
        }
    },

    filters: {

        // filter cannot be used in v-html or v-text directive
        // filters are added to the $options after instantiation
        removeLastName: function(fullName) {
            return fullName.slice(0, fullName.indexOf(' ') + 2);
        },

        convertToMoney: function(balance) {
            return balance.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        }
    },

    beforeCreate: function() {
        // alert('tiger before create');
    },

    created: function() {
        this.accounts = this.accountData;
    },

    beforeMount: function() {
        // alert('tiger before mount');
    },

    mounted: function() {
        // alert('tiger mounted');
    },

    beforeUpdate: function() {
        // alert('tiger before update');
    },

    updated: function() {
        // alert('tiger updated');
    },
});