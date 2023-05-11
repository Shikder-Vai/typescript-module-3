// Normal Class
/** 
class Student {
  name: string;
  age: number;

  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getsleep(hours: number) {
    return `this ${this.name} will sleep ${hours}`;
  }
}

class Techer {
  name: string;
  age: number;
  address: string;
  desingnation: string;

  constructor(
    name: string,
    age: number,
    address: string,
    desingnation: string
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.desingnation = desingnation;
  }
  getsleep(hours: number) {
    return `this ${this.name} will sleep ${hours}`;
  }

  totalClass(takeClasses: number) {
    return `this ${this.name} total take class ${takeClasses}`;
  }
}
*/

//Inheritence Class
/** 
class Person {
  constructor(public name: string, public age: number, public address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getsleep(hours: number) {
    return `this ${this.name} will sleep ${hours}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("abul", 21, "dhaka");

class Teacher extends Person {
  desingnation: string;

  constructor(
    name: string,
    age: number,
    address: string,
    desingnation: string
  ) {
    super(name, age, address);
    this.desingnation = desingnation;
  }

  totalClass(takeClasses: number) {
    return `this ${this.name} total take class ${takeClasses}`;
  }
}

const teacher1 = new Teacher("kamal", 54, "dhaka", "profasor");
*/
