const Computer = function(name,model){
      this.name = name;
      this.model = model;
      
      // this.aboutComputer = function(){
      //       console.log(`this computer name is ${this.name}`);
      // }

      Computer.prototype.aboutComputer = function(){
            console.log(`this computer name is ${this.name}`);}
            
}

// Four  rules of function constructor
// 1. create an empty object {}
// 2. function call this ={}
// 3. {} linked with prototype
// 4. {} will be return automatically 



const dell = new  Computer('dell','inspiron n4050')
console.log(Computer.prototype);

//console.log(dell.__proto__.__proto__);
console.log(dell.hasOwnProperty('name'));

dell.aboutComputer()