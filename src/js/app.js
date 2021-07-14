/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import Person from './person';

export default class Team {
  constructor(...args) {
    this.team = [];
    args.forEach((e) => {
      this.team.push(new Person(e));
    });
  }

  [Symbol.iterator]() {
    const { team } = this;
    let count = 0;
    return {
      next() {
        if (count < team.length) {
          return {
            done: false,
            value: team[count++],
          };
        }
        return {
          done: true,
          value: team[count],
        };
      },
    };
  }
}

const team1 = new Team('Bowman', 'Swordsman', 'Demon');

for (const value of team1) {
  console.log(value);
}
