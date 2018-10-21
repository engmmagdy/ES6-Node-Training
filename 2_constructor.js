// Construtcor
function Book(title, author, year, ...a){
    this.title = title;
    this.author = author;
    this.year = year;
    this.a = a;

    this.getSummary= function(){
        return `${this.title} was written by ${this.author} in ${this.year} and it's publication in ${this.a[0]}`;
    }
}



// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2016','England', 'France','Egypt');
const book2 = new Book('Book Two', 'Mohamed Magdy', '2018','Egypt');


const array =  `${book1.a[0]} and ${book2.a[0]}`;

// Log the results
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(array);



