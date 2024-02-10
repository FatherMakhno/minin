Vue.createApp({
    // data() {
    //     return {

    //     }
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Grut',
        person: {
            firstName: 'Dan',
            lastName: 'Olkh',
            age: 23
        },
        items: [1, 2]
    }),
    methods: {
        // stopPropagation(event) {
        //     event.stopPropagation()
        // }
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log('Log item: ', item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 == 0)
        }
    }
}).mount('#app')