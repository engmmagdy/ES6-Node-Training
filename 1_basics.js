// const s1 = 'Hello';

// console.log(typeof s1); // String = Primitive Value

// const s2 = new String('Hello');

// console.log(typeof s2); // Object Constructor Value

const person1 = {
    name: 'Mohammed Magdy',
    age: 31,
    gender: 'Male',
    job: 'Frontend Developer',
    married: true,
    getMarried: function () {
        if (this.married === true) {
            return `${this.name} yes is Married 
            
            and he is ${this.age} years old and his job ${this.job}            
            `;
        } else {
            return `${this.name} not Married`;
        }
    }
}

const person2 = {
    name: 'Angry',
    age: 25,
    gender: 'Male',
    job: 'SharePoint Developer',
    married: false,
    getMarried: function () {
        if (this.married === true) {
            return `${this.name} yes is Married `;
        } else {
            return `${this.name} not Married`;
        }
    }
}

console.log(Object.values(person1))  ;
console.log(Object.keys(person1))  ;