import { LOAD_PLAYERS, GET_PLAYER, PLAY } from '../actiontypes/player';

const initState = {
  player1: {
    loading: true
  },  
  player2: {
    loading: true
  }
};

export default function Player (state = initState, action) {
  switch(action.type) {
    case LOAD_PLAYERS:
      return {
        player1: {
          loading: true
        },
        player2: {
          loading: true
        }
      }
    case GET_PLAYER:
      let player = action.payload.player;
      let key = `player${action.payload.playerIndex}`;
      return {
        ...state,
        [key]: {
          winner: false,
          name: player.name,
          gameStats: null,
          spaceship: player.spaceship
        }
      }
    case PLAY:
      let player1 = state.player1;
      player1.gameStats = action.payload.player1Stats;
      if (action.payload.playerOneWon) {
        player1.winner = true;
      }

      let player2 = state.player2;
      player2.gameStats = action.payload.player2Stats;

      return {
        ...state,
        player1: player1,
        player2: player2,
      }
    
    default:
      return state;
  }
}
