class Parent{
    constructor(){
        this.fatherName = "Billah"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName
    }
}
const baby = new Child("Masum")
const baby2 = new Child("MD")
console.log(baby);
console.log(baby2);
console.log(baby.getFullName())