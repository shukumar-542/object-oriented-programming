class Computer{
      constructor(name,model){
            this.name =  name;
            this.model = model;

      }
      aboutComputer(){
            console.log(`This computer name is ${this.name} and model is ${this.model}`);
      }
}

class Hp extends Computer{
      constructor(name,model,warranty){
            super(name,model)
            this.warranty =  warranty;
      }
      aboutWarranty(){
            console.log(`This is ${this.name} and warranty ${this.warranty}`);
      }
}

// const dell = new Computer('dell','inspiron N4050');
// console.log(dell);
// dell.aboutComputer();
const hp = new Hp('hp','2031d',3)
hp.aboutComputer()
hp.aboutWarranty();