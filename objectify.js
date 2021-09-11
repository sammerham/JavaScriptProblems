'use strict'

const team =
[{
  role: 'Batsman',
  player: 'V Kohli'
}, {
  role: 'Wicket Keeper',
  player: 'KL Rahul'
}, {
  role: 'Batsman',
  player: 'R Sharma'
}, {
  role: 'Wicket Keeper',
  player: 'R Pant'
}, {
  role: 'Bowler',
  player: 'B Kumar'
}, {
  role: 'Bowler',
  player: 'M Shami'
  
  },]

const objectify = (team) => {
  const teamObj = {};
  for (let obj of team) {
    if (teamObj[obj.role]) {
      teamObj[obj.role].push(obj.player);
    } else {
      teamObj[obj.role] = [obj.player];
    }
  }
  return teamObj;
};


console.log(objectify(team));