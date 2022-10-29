import Character from './character';

export default class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
