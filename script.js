const { createApp } = Vue

createApp({
    methods: {
        getBaristaImage() {
            if (this.baristaHover == true) {
                return "./images/barista_sunny.jpg"
            } else {
                return "./images/barista.jpg"
            }
        },
        getPostalImage() {
            if (this.postalHover == true) {
                return "./images/postal_sunny.jpg"
            } else {
                return "./images/postal.jpg"
            }
            
        },
        getLionImage() {
            if (this.lionHover == true) {
                return "./images/lion_sunny.jpg"
            } else {
                return "./images/lion.jpg"
            }
        },
        getHotdogImage () {
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