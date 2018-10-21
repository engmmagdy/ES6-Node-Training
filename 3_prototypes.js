// Construtcor
function Book(title, author, year, ...a){
    this.title = title;
    this.author = author;
    this.year = year;
    this.a = a;
}

// getSummary Prototype function
Book.prototype.getSummary= function(){
    return `${this.title} was written by ${this.author} in ${this.year} and it's publication in ${this.a[0]}`;
}

// getAge Prototype function
Book.prototype.getAge= function(){
    const years = new Date().getFullYear() -  this.year;
    return `${this.title} is ${years} years old`;
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2016','England', 'France','Egypt');
const book2 = new Book('Book Two', 'Mohamed Magdy', '2015','Egypt');


// Log the results

console.log(book2.getSummary() + ' and ' + book2.getAge());





