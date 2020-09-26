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

test('Damage should be done', () => {
  const char = new Bowman('Bob', 'Bowman');
  char.damage(15);
  expect(char.health).toBe(88.75);
});

test('Damage should not be done if health = 0', () => {
  const char = new Bowman('Bob', 'Bowman');
  char.health = 0;
  char.damage(15);
  expect(char.health).toBe(0);
});

test('LevelUp should throw error "Character is dead"', () => {
  const char = new Undead('Charlie', 'Undead');
  char.health = 0;
  expect(() => { char.levelUp(); }).toThrow(/Невозможно повысить уровень/);
});

test('levelUp should work correct', () => {
  const char = new Zombie('Shaun', 'Zombie');
  char.damage(15);
  char.levelUp();

  expect(char.level).toBe(2);
  expect(char.attack).toBe(48);
  expect(char.defence).toBe(12);
  expect(char.health).toBe(100);
});
