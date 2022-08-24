


//console.log(Array());

Array.prototype.filter = function(){
      let arr = [];

      for(i=0;i<this.length; i++){
            if (this[i] % 2 == 1) {
            arr.push(this[i])
            }
            
      }
      return arr;
}

const arr = [2,4,5,6,7,8,10,11]
const evenNumber = arr.filter(ele => ele % 2 == 0)
console.log(evenNumber);

console.log([2,5,4,6,17,15].filter());

