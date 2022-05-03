const app = Vue.createApp({
    //data,functions
    data() {
        return {
            url : 'http://www.thenetninja.co.uk',
            showBooks : true,
            books :[
                {title : 'Name of the wind', author: 'Patrick Rothfuss',img: 'assets/NameOfWind.jpg',isFav:true},
                {title :'The way of Kings', author : 'Brandon Sanderson',img: 'assets/WayOfKings.jpg',isFav:false},
                {title :'The final Empire', author : 'Brandon Sanderson',img: 'assets/FinalEmpire.jpg',isFav:true},
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