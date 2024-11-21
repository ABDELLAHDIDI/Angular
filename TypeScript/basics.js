//primitives 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12.34;
var userName;
var isInstructor;
isInstructor = true;
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person={
//     isEmployee: true;
// }
var people;
// Type inference 
var course = ' Abedllah didi'; // union type
course = 123445;
// finction &  types 
function add(a, b) {
    return a + b;
}
// function print(value: any ) {
//     console.log(value);
// }
// Generics 
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
updateArray[0].split(''); // error in runTime 
// solution 
function Generic_insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var updateArray_Generic = Generic_insertAtBeginning(demoArray, -1);
//  updateArray_Generic[0].split('');
var stringArray = Generic_insertAtBeginning(['a', 'b', 'c'], 'd');
var Student = /** @class */ (function () {
    // firstName: string ; 
    // lastName: string ;
    // age: number; 
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('didi', 'abdellah', 24, ['Angular']);
student.enrol('React');
student.listCourses();
var didi;
didi = {
    firstName: 'didi',
    age: 24,
    greet: function () {
        console.log('Hello !!!');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
        this.greet = function () {
            console.log('Hello !!');
        };
    }
    return Instructor;
}());
