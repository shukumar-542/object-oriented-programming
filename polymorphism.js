class Computer{
      constructor(name,model,){
            this.name=  name;
            this.model= model;
      }
      aboutComputer(){
            console.log(`This is ${this.name} and Model ${this.model}`);
      }
}
class Hp extends Computer{
      constructor(name,model,color){
            super(name,model)
            this.color = color;

      }
      aboutComputer(){
            console.log(`This is ${this.name} and Model ${this.model} and color ${this.color}`);
      }
}
const dell = new Computer('dell','inspiron N4050');
const hp = new Hp('hp','sdfhd','black');
const hp2 = new Hp('hp','sdfhd','white');
hp2.aboutComputer();