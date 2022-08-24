const HouseRent =  function(rent){
      this.rent = rent

      
      
}
HouseRent.prototype.incrementPerYear = function(){
      this.rent += 1000
      console.log(this.rent);
}
HouseRent.prototype.decrementPerYear = function(){
      this.rent -= 1000
      console.log(this.rent);
}
const showResult = new HouseRent(20000)
console.log(showResult);
showResult.incrementPerYear();
showResult.incrementPerYear();
showResult.decrementPerYear();


