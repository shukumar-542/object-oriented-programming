class Computer{
      constructor(name,model,warranty){
            this.name =  name;
            this.model =  model;
            this.warranty = warranty;
      }
      warrantyValidate(value){
            console.log(`${(this.warranty) * 12 - value} month remaining`);
      }
}
const dell = new Computer('dell','inspiron n4050',3);
console.log(dell);
dell.warrantyValidate(20);