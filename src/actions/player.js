import { LOAD_PLAYERS, GET_PLAYER, PLAY } from '../actiontypes/player';
import { gameOngoing, gameFinished } from './game';
import Race from '../Race';

const routeHistory = {};

export const loadPlayers = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PLAYERS
    })
  }
};

export const getPlayer = (playerIndex, player) => {
  return dispatch => {
    dispatch({
      type: GET_PLAYER,
      payload: {
        playerIndex:playerIndex,
        player: player,
      }
    })
  }
};

const getVehicle = (playerIndex, playerData) => {
  return dispatch => {
    let player = playerData.results[Math.floor(Math.random() * 9)];

    if (!player || !player.vehicles.length) {
      return dispatch(loadPlayer(playerIndex));
    }

    let vehicleIndex = Math.floor(Math.random() * player.vehicles.length);
    let vehicleURL = player.vehicles[vehicleIndex];

    if (routeHistory[vehicleURL]) {
      let vehicle = routeHistory[vehicleURL];
      player.spaceship = {
        name: vehicle.name,
        speed: parseFloat(vehicle.max_atmosphering_speed),
        cargo: parseFloat(vehicle.cargo_capacity)
      };
      dispatch(getPlayer(playerIndex, player));
      return;
    }


      fetch(vehicleURL).then(response => {
      response.json().then( vehicle => {
        if (vehicle.cargo_capacity == 'unknown') {
          dispatch(loadPlayer(playerIndex));
          return;
        }

        routeHistory[vehicleURL] = vehicle;
        player.spaceship = {
          name: vehicle.name,
          speed: parseFloat(vehicle.max_atmosphering_speed),
          cargo: parseFloat(vehicle.cargo_capacity)
        };
        dispatch(getPlayer(playerIndex, player));
      });
    });
  }
}

export const loadPlayer = (playerIndex) => {
  return dispatch => {
    let page = Math.floor(Math.random() * 9) + 1;
    let characterURL = 'https://swapi.co/api/people?page='+page;

    if (routeHistory[characterURL]) {
      dispatch(getVehicle(playerIndex, routeHistory[characterURL]));
      return;
    }

    return fetch(characterURL).then(response => {
      response.json().then( playerData => {
        if (!playerData.results) {
          return dispatch(loadPlayer(playerIndex));
        }
        routeHistory[characterURL] = playerData;
        dispatch(getVehicle(playerIndex, playerData));
      });
    });
  }
}

export const play = (gold, distance, player1, player2) => {
  let race = new Race(gold, distance);

  let player1Time = race.getTime(player1.spaceship);
  let player1Trips = race.getTripTotal(player1.spaceship.cargo);

  let player2Time = race.getTime(player2.spaceship);
  let player2Trips = race.getTripTotal(player2.spaceship.cargo);

  let win = player1Time < player2Time;

  let player1Stats = {
    totalTime: player1Time,
    numberOfTrips: player1Trips,
    speed: player1.spaceship.speed,
    cargo: player1.spaceship.cargo
  };

  let player2Stats = {
    totalTime: player2Time,
    numberOfTrips: player2Trips,
    speed: player2.spaceship.speed,
    cargo: player2.spaceship.cargo
  };

  return dispatch => {
    dispatch(gameOngoing());
    dispatch({
      type: PLAY,
      payload: {
        playerOneWon: win,
        player1Stats: player1Stats,
        player2Stats: player2Stats
      }
    });
    dispatch(gameFinished(win));
  }
}
