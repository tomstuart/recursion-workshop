import anagramsOf from '../lib/anagramsOf';

describe('anagramsOf', () => {
  test('anagramsOf("")', () => {
    const anagrams = anagramsOf('');
    expect(anagrams.length).toBe(1);
    expect(anagrams).toEqual(expect.arrayContaining(['']));
  });

  test('anagramsOf("a")', () => {
    const anagrams = anagramsOf('a');
    expect(anagrams.length).toBe(1);
    expect(anagrams).toEqual(expect.arrayContaining(['a']));
  });

  test('anagramsOf("ab")', () => {
    const anagrams = anagramsOf('ab');
    expect(anagrams.length).toBe(2);
    expect(anagrams).toEqual(expect.arrayContaining(['ab', 'ba']));
  });

  test('anagramsOf("dogs")', () => {
    const anagrams = anagramsOf('dogs');
    expect(anagrams.length).toBe(24);
    expect(anagrams).toEqual(expect.arrayContaining(['dgos', 'dgso', 'dogs', 'dosg', 'dsgo', 'dsog', 'gdos', 'gdso', 'gods', 'gosd', 'gsdo', 'gsod', 'odgs', 'odsg', 'ogds', 'ogsd', 'osdg', 'osgd', 'sdgo', 'sdog', 'sgdo', 'sgod', 'sodg', 'sogd']));
  });
});
