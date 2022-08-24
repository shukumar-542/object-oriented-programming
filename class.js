// class declearaion 
// class myName{

// }
// class expression
// const myName =  class{

// }

class Computer{
      constructor(name,model){
            this.name =name;
            this.model =  model;

      }
      aboutComputer(){
            console.log(`my Computer name ${this.name} and model ${this.model}`);
      }
}

const myComputer = new Computer('dell','inspironN4050');
console.log(myComputer)
myComputer.aboutComputer();