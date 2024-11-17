new Vue({
    el: '#app',
    data: {
        name: 'Bitcoin',
        img: 'https://img.icons8.com/?size=100&id=8OVvETCMTPDi&format=png&color=000000',
        changePercent: -10,
        // prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

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

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
        }
    },
})