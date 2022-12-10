const { createApp } = Vue

createApp({
    data() {
        return {
          titleMessage: "Sunny's Careers & Where They Began",
          currentBaristaImage: "./images/barista.jpg",
          baristaSunny: "./images/barista_sunny.jpg",
          barista: "./images/barista.jpg",
          currentPostalImage:"./images/postal.jpg",
          postalSunny: "./images/postal_sunny.jpg",
          postal: "./images/postal.jpg",
          currentLionImage: "./images/lion.jpg",
          lionSunny: "./images/lion_sunny.jpg",
          lion: "./images/lion.jpg",
          currentHotdogImage:"./images/hotdog.jpg",
          hotdogSunny: "./images/hotdog_sunny.jpg",
          hotdog: "./images/hotdog.jpg"
        }
    }
}).mount('#app')