class HouseRent{
      constructor(rent){
            this.rent =  rent;
      }
      incrementPerYear(){
            this.rent += 1000;
            console.log(this.rent);
      }
      decrementPerYear(){
            this.rent -= 1000;
            console.log(this.rent);
      }
}
const myHouse = new HouseRent(20000)
console.log(myHouse);

myHouse.incrementPerYear();
myHouse.incrementPerYear();
myHouse.decrementPerYear();
myHouse.decrementPerYear();