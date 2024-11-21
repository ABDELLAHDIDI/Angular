//primitives 

let age: number; 

age = 12.34;

let userName: string | string[]; 

let isInstructor: boolean;

isInstructor = true; 

let hobbies: string[] ; 

hobbies = ['Sports', 'Cooking' ]

type Person =  {name: string ; age: number ;  } ; 

let person: Person

person = {
    name: 'Max' , 
    age: 32
};

// person={
//     isEmployee: true;
// }


let people: Person[]; 

// Type inference 

let course: string | number  = ' Abedllah didi' // union type

 course = 123445; 

// finction &  types 

// function add (a: number ,b: number)  {
// return a+b ; 
// }


// function print(value: any ) {
//     console.log(value);
// }

// Generics 

function insertAtBeginning (array: any[] , value: any ){
const newArray = [value, ...array]; 
return newArray;
}

const demoArray = [1,2,3];

const updateArray = insertAtBeginning(demoArray,-1) ; // [-1,1,2,3]

updateArray[0].split('');// error in runTime 

// solution 

function Generic_insertAtBeginning<T> (array: T[] , value: T ){
    const newArray = [value, ...array]; 
    return newArray;
    } 

     const updateArray_Generic = Generic_insertAtBeginning(demoArray,-1) ; 

    //  updateArray_Generic[0].split('');

    const stringArray = Generic_insertAtBeginning(['a','b','c'],'d'); 


    class Student {
// firstName: string ; 
// lastName: string ;
// age: number; 
// private courses: string[];

constructor(
    public firstName: string ,
    public lastName: string ,
    public age: number , 
    private courses: string[]
){}

enrol(courseName: string ){
    this.courses.push(courseName);
}
listCourses(){
    return this.courses.slice();
}
    }

    const student = new Student('didi','abdellah',24,['Angular']);

    student.enrol('React');

student.listCourses();

// interface 

 interface Human {
    firstName: string;
    age: number;

    greet: () => void ; 

 }

 let didi: Human ; 

 didi = { 
    firstName: 'didi', 
    age:24, 
    greet(){
console.log('Hello !!!');

    }
 }

 class Instructor implements Human {
     firstName: string;
     age: number;
     greet =  () => {
        console.log('Hello !!');
     }; 
    
 }


