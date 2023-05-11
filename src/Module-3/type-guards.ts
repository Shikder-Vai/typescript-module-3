/**Type guards total 3 type
 * keyof guard
 * in guard
 * instanceof guard
 */

//keyof guard
type Alphaneumaric = string | number;
const addNum = (num1: Alphaneumaric, num2: Alphaneumaric): Alphaneumaric => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

addNum(1, 5);
addNum("6", "5");

// In guard type
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: string;
};
const getAdmin = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    return `hi my role is ${user.role} and my name is ${user.name}`;
  } else {
    return `hi i am normal user my name is ${user.name}`;
  }
};
const normalUser = { name: "abul" };
const adminUser = { name: "balul", role: "admin" };
console.log(getAdmin(adminUser));
console.log(getAdmin(normalUser));
