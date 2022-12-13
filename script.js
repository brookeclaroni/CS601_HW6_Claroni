const { createApp } = Vue

createApp({
    data() {
        return {
          titleMessage: "Sunny's Careers & Where They Began",
          images : [
            {current: './images/barista.jpg', original: './images/barista.jpg', sunny: './images/barista_sunny.jpg'},
            {current: './images/postal.jpg', original: './images/postal.jpg', sunny: './images/postal_sunny.jpg'},
            {current: './images/lion.jpg', original: './images/lion.jpg', sunny: './images/lion_sunny.jpg'},
            {current: './images/hotdog.jpg', original: './images/hotdog.jpg', sunny: './images/hotdog_sunny.jpg'}
          ],
          imageIndex: 0
        }
    }
}).mount('#app')