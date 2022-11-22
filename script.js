const { createApp } = Vue

createApp({
    methods: {
        getBaristaImage: function () {
            if (this.baristaHover == true) {
                return "./images/barista_sunny.jpg"
            } else {
                return "./images/barista.jpg"
            }
        },
        getPostalImage: function () {
            if (this.postalHover == true) {
                return "./images/postal_sunny.jpg"
            } else {
                return "./images/postal.jpg"
            }
            
        },
        getLionImage: function () {
            if (this.lionHover == true) {
                return "./images/lion_sunny.jpg"
            } else {
                return "./images/lion.jpg"
            }
        },
        getHotdogImage: function () {
            if (this.hotdogHover == true) {
                return "./images/hotdog_sunny.jpg"
            } else {
                return "./images/hotdog.jpg"
            }
        }
    },
    data() {
        return {
            baristaHover: false,
            postalHover: false,
            lionHover: false,
            hotdogHover: false,
            titleMessage: "Sunny's Careers & Where They Began"
        }
    }
}).mount('#app')