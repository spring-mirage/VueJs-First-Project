Vue.component('counter', {
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        increase() {
            this.counter++
        }
    },

    template: `
        <div>
            <button v-on:click="increase">Click me!</button>
            <spam>{{ counter }}</spam>
        </div>
    `
})

new Vue ({

    el: '#app',

    data() {
        return {
            title: 'Hello'
        }
    }
})