//
// console.log("check on your sanity");
//
// // base class - constructor
// var Vehicle = function(numberOfWheels, carColor){
//   this.wheels = numberOfWheels;
//   this.color = carColor;
// };
// // methods
// Vehicle.prototype.honk = function(){
//   return "honk!";
// };
// Vehicle.prototype.toString = function(){
//   return "the vehicle has " + this.wheels + " wheels and is " +
//     this.color + ".";
// };
//
// // Instancs
// var redCar = new Vehicle(4, "red");
// console.log(redCar);
// console.log(redCar.honk());
// console.log(redCar.toString());
//
// quick challenges
var Song = function (songName,bandName){
  this.songName = songName;
  this.bandName = bandName;
};
// methods
Song.prototype.countName = function(){
  return this.songName.length;
};
Song.prototype.createElement = function(){
  // console.log('test');
  $("body").html("<h1>you are now listinging to "+
  currentSong.songName +" by " + currentSong.bandName +"</h1>");
  $("title").html(currentSong.bandName);
};

// instances
var currentSong = new Song("Moneymaker", "Diego's Umbrella");
console.log(currentSong);
console.log(currentSong.bandName);
console.log(currentSong.songName);
console.log(currentSong.countName());
console.log(currentSong.createElement());
