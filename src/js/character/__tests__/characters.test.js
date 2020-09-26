import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

const characterData = [
  [Bowman, 'Bowman', 25, 25],
  [Swordsman, 'Swordsman', 40, 10],
  [Magician, 'Magician', 10, 40],
  [Undead, 'Undead', 25, 25],
  [Zombie, 'Zombie', 40, 10],
  [Daemon, 'Daemon', 10, 40],
];

test.each(characterData)('%p %s should have %d atk & %d def', (CharClass, charType, atk, def) => {
  const char = new CharClass('Bob', charType);
  expect(char.attack).toBe(atk);
  expect(char.defence).toBe(def);
});
