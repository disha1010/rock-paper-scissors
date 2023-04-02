import iconPaper from './images/icon-paper.svg';
import iconScissors from './images/icon-scissors.svg';
import iconRock from './images/icon-rock.svg';

export const ORIGINAL_RSP = {
  rock: {
    id: 0,
    title: 'rock',
    iconSrc: iconRock,
    power: 2,
  }, 
  paper: {
    id: 1,
    title: 'paper',
    iconSrc: iconPaper,
    power: 0,
  }, 
  scissors: {
    id: 2,
    title: 'scissors',
    iconSrc: iconScissors,
    power: 1,
  }
};