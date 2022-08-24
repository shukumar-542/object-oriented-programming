//Function constructor

// const Computer =  function(name,model){
//       this.name = name;
//       this.model=  model;

//       Computer.sayAbout = function(){
//             console.log('This is my computer');
//       }

// }
// const myComputer = new Computer('dell','inspiron N4050');
// console.log(myComputer);
// Computer.sayAbout();


/// CLASS constructor

class Computer{
      constructor(name,model){
            this.name = name;
            this.model = model;
      }
      static sayAbout = function(){
            console.log('This is my Computer');
      }
}
const myComputer = new Computer('dell','inspiron N4050')
console.log(myComputer);
Computer.sayAbout();