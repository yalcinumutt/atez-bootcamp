class Ders {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
    }

    getName() {
        return this.name;
    }

    setName(newValue) {
        if (newValue) {
            this.name = newValue;
        }
    }

    getClassNameWithTeacher () {
        if (this.name && this.teacher)
            return `${this.name} dersinin ogretmeni:${this.teacher}`;
        else return  "Ogretmen ve isim tanimi yok";
    }
}

const mathLesson = new Ders("Matematik", "Umut");
console.log('Math Object', mathLesson.getClassNameWithTeacher());
mathLesson.setName("Math");
console.log('Math Object New', mathLesson);
console.log('New Object', new Ders().getClassNameWithTeacher());

class Animal {
    constructor(name, age, eyeColor) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor
    }

    speak() {
        return `${this.name} speaks`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        return this.name + " barks";
    }
}

class Cat extends Animal{
    constructor(name, tail) {
        super(name);
        this.tail = tail;
    }

    stracth() {
        return this.name + " tirmaladi";
    }
}

const goldenRetriever = new Dog('Eddie');
console.log('Dog Object', goldenRetriever.bark());
const iranCat = new Cat('Java', "kisa");
console.log('Cat Object',iranCat,  iranCat.speak(), iranCat.stracth());


