class Computer{
      #warranty
      constructor(name,model,warranty){
            this.name= name;
            this.model = model;
            this.#warranty = warranty;
      }
      aboutComputer(){
             this.#aboutWarranty();
            console.log(`This is ${this.name} and model is ${this.model}`);
      }
      #aboutWarranty(){
            console.log(`${this.#warranty} year warranty is porvide by dell`);
      }
}
const dell = new Computer('dell','inspiron N4050',3)
console.log(dell);
dell.aboutComputer();
// dell.aboutWarranty();