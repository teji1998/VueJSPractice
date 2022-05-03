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
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }   
})

app.mount('#app')

//Challenge- add to favs
//  - attach a click event to each li tag(for each book)
//  - when a user clicks an li, toggle the 'isFav' property of that book