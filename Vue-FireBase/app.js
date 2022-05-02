const app = Vue.createApp({
    //data,functions
    data() {
        return {
            url : 'http://www.thenetninja.co.uk',
            showBooks : true,
            books :[
                {title : 'Name of the wind', author: 'Patrick Rothfuss'},
                {title :'The way of Kings', author : 'Brandon Sanderson'},
                {title :'The final Empire', author : 'Brandon Sanderson'},
            ]
        }

    },
    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
    }   
})

app.mount('#app')