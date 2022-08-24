class Car{
      constructor(name,color){
            this.name = name;
            this.color = color;
      }
      details(){
            console.log(`Car name is ${this.name} and color ${this.color}`);
      }
      static staticMethod(){
            return `You could not access this method by instantiate`
      }
      get carName() {
            return this.name
      } 
      set carName(val){
            this.name = val;
      }
}
const ferari = new Car('ferari','red');
ferari.details();
console.log(ferari.carName);
ferari.carName = 'primio';
console.log(ferari.carName);
// console.log(Car.staticMethod()); 
// console.log(ferari.__proto__);
// console.log(Car.prototype);