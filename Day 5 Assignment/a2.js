class User {
  constructor(name, age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.luCoins = 0;
    this.courses = [];
  }

  login(){
      console.log(`${this.name} has logged in`);
      return this;
  }
  logout(){
      console.log(`${this.name} has logged out`);
      return this;
  }
  addCoins(){
      this.luCoins++;
      console.log(`${this.name} has ${this.luCoins} coins`);
      return this;
  }
  deleteCoins(){
      this.luCoins--;
      console.log(`${this.name} has ${this.luCoins} coins`);
      return this;
  }

}

class Moderator extends User{
  constructor(name,age,email,role){
      super(name,age,email);
      this.role = role;
  }

  deleteUser(user){
      users = users.filter(u =>{
          return u.email != user.email; 
      })
  }

  aCoins(user){
      user.addCoins();
  }

  dCoins(user){
      user.deleteCoins();
  }

}

class Admin extends Moderator{
  addCourse(user,course){
      user.courses.push(course);
      console.log(user);
  }
  delCourse(user,course){
      user.courses.splice(user.courses.indexOf(course),1);
      console.log(user);
  }
}


let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',24,'k@gmai.com')
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
  console.log(element);
});

mod.aCoins(user1);
mod.aCoins(user2);
mod.dCoins(user1);
mod.aCoins(user1);
mod.aCoins(user2);
mod.aCoins(user2);
mod.dCoins(user2);
console.log(user1);
console.log(user2);

admin.addCourse(user1,['Javascript','Python']);
admin.delCourse(user1,'Python');