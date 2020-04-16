const { getRatio, get, groupBy, process } = require('./index');

test('getRatio', () => {
  expect(getRatio([])).toEqual([]);
  expect(getRatio([10])).toEqual([1]);
  expect(getRatio([1, 1, 1, 1])).toEqual([0.25, 0.25, 0.25, 0.25]);
  expect(getRatio([1, 1, 1])).toEqual([0.34, 0.33, 0.33]);
  expect(getRatio([2, 1])).toEqual([0.67, 0.33]);
  expect(getRatio([3, 1])).toEqual([0.75, 0.25]);
});

test('groupBy', () => {
  expect(groupBy([1, 1, 2, 2])).toEqual({
    '1': [1, 1],
    '2': [2, 2],
  });

  expect(groupBy([0, 1, 2, 3, 4, 5], (v) => v % 2)).toEqual({
    '0': [0, 2, 4],
    '1': [1, 3, 5],
  });
});

test('get', () => {
  const data = {
    id: 10,
    next: null,
    author: {
      name: 'Pushkin',
    },
    comments: [
      {
        text: 'Super!',
      },
    ],
  };

  expect(get('id', data)).toBe(10);
  expect(get('title', data)).toBe(undefined);
  expect(get('author.name', data)).toBe('Pushkin');
  expect(get('comments.0.text', data)).toBe('Super!');
  expect(get('next.id', data)).toBe(null);
});

test('process', async () => {
  expect(await process(3, (n) => n * 2)).toBe(12);
  expect(
    await process(3, () => {
      throw new Error('failed');
    })
  ).toBe('failed');
});
