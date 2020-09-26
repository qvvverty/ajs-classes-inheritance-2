export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) throw new Error('Имя должно быть длиной не менее 2 и не более 10 символов');
    const availableClasses = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    let isTypeCorrect = false;
    for (let i = 0; i < availableClasses.length; i += 1) {
      if (type === availableClasses[i]) {
        isTypeCorrect = true;
        break;
      }
    }
    if (!isTypeCorrect) throw new Error('Передан недопустимый класс');

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
