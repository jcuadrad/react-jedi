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
      let tripsWithCargo = Math.ceil(this.gold/spaceship.cargo);
      let tripsWithoutCargo = tripsWithCargo - 1;
  
      let timeWithCargo = ((this.distance/spaceship.speed) + 2) * tripsWithCargo;
      let timeWithoutCargo = (this.distance/spaceship.speed) * tripsWithoutCargo;
  
      return parseFloat((timeWithCargo + timeWithoutCargo).toFixed(4));
    }
};