new Vue({
    el: '#app',
    data: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://img.icons8.com/?size=100&id=8OVvETCMTPDi&format=png&color=000000',
        changePercent: -10,
        // prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

        value: 0,

        color: 'f4f4f4',

        price: 8400,

        pricesWithDays: [
            { day: 'Lunes', value: 8400 },
            { day: 'Martes', value: 7900 },
            { day: 'Miércoles', value: 8200 },
            { day: 'Jueves', value: 9000 },
            { day: 'Viernes', value: 9400 },
            { day: 'Sábado', value: 10000 },
            { day: 'Domingo', value: 10200 },
        ],

        showPrices: false,
    },

    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.color = this.color.split('')
            .reverse()
            .join('')
        }
    },
})