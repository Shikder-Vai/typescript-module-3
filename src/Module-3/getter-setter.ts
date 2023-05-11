class BankAcount {
  constructor(
    public name: string,
    public age: number,
    private _balance: number
  ) {
    this.name = name;
    this.age = age;
    this._balance = _balance;
  }

  //   currentBalance() {
  //     return ` my current balance is ${this._balance}`;
  //   }

  //getter
  get balance() {
    return this._balance;
  }

  newTotalBalance(newBalace: number) {
    return (this._balance = newBalace);
  }
  //setter
  set addBalance(amount: number) {
    this._balance = this._balance + amount;
  }

  //   makeDiposit(amount: number) {
  //     return (this._balance = this._balance + amount);
  //   }
}
const userAcount1 = new BankAcount("kashem", 42, 10000);
userAcount1.addBalance = 50;
console.log(userAcount1);
