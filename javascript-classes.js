class User {
    constructor (FirstName, LastName, age, groupName, grade) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.age = age;
        this.groupName = groupName;
        this.grade = grade;
    }

    get birthYear() {
        return 2023 - this.age;
    }
    get fullName() {
        return this._fullName = this.FirstName + this.LastName;
    }
    
    set fullName(value) {
        if (!value) {
            console.log('Name cant be empty!');
            return;
        }
        this._fullName = value;
    }
    set birthYear(value) {
        if (!value) {
            console.log('Age cant be empty!')
            return;
        }
        this._birthYear = value;
    }

    get groupName() {
        const student2group = '50b'
        return this._groupName == student2group;
    }
    set groupName(value) {
        if (!value) {
            console.log('Group cant be empty!')
            return;
        }
        this._groupName = value;
    }

    get groupName2() {
        const student1group = '62c'
        return this._groupName == student1group;
    }
    set groupName2(value) {
        if (!value) {
            console.log('Group2 cant be empty!')
            return;
        }
        this._groupName2 = value;
    }

    get grade() {
        const MIN_GRADE_FOR_SCHOLARSHIP = 4;
        return this._grade > MIN_GRADE_FOR_SCHOLARSHIP;
    }
    set grade(value) {
        if (!value) {
            console.log('Grade cant be empty!')
            return;
        }
        this._grade = value;
    }
}
class Teacher extends User {
    constructor(FirstName, LastName, age, groupName, grade) {
        super(FirstName, LastName, age, groupName, grade);
    }
}
class Student extends User {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;
    constructor(FirstName, LastName, age, groupName, grade) {
        super(FirstName, LastName, age, groupName, grade);
    }
}
const teacher1 = new Teacher('Brad', 'Pitt', 59, '50b', 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 48, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.grade); // true
console.log(student2.grade); // false
console.log(teacher1.groupName); // true
console.log(teacher1.groupName2); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4