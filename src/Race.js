export default class Race {

    constructor(gold, distance) {
      this.gold = gold;
      this.distance = distance;
    }
  
    getTripTotal(cargo) {
      let trips = Math.ceil(this.gold/cargo);
      return (trips * 2) - 1;
    }
  
    getTime(spaceship) {
      //Calculate the number of trips for each spaceship, both with or without cargo.
      //Substract one because there's no last trip back
      let tripsWithCargo = Math.ceil(this.gold/spaceship.cargo);
      let tripsWithoutCargo = tripsWithCargo - 1;

      // Calculate the time of the trips, adding the hours needed for loading.
      let timeWithCargo = ((this.distance/spaceship.speed) + 2) * tripsWithCargo;
      let timeWithoutCargo = (this.distance/spaceship.speed) * tripsWithoutCargo;
  
      //Return the final sum of time
      return parseFloat((timeWithCargo + timeWithoutCargo).toFixed(4));
    }
};