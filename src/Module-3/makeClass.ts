class Animal {
  name: string;
  cattagory: string;
  sound: string;

  constructor(name: string, cattagory: string, sound: string) {
    this.name = name;
    this.cattagory = cattagory;
    this.sound = sound;
  }
  makeSound() {
    console.log(`this ${this.name} ${this.cattagory} says${this.sound}`);
  }
}

const dog = new Animal("forashi", "dog", "ghew ghew");
dog.makeSound();

class Books {
  constructor(
    public name: string,
    public page: number,
    public writer: string
  ) {}
  public getWriter() {
    console.log(`this ${this.name} page ${this.page} writer ${this.writer}`);
  }
}
const book7 = new Books("senapoti", 45, "nasim");
book7.getWriter();
