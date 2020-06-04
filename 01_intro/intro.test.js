const {sum} = require('./intro')


// в callback функции описываем тест; toBe и toEqual это "мэтчеры"
test('Sum should return sum of two values', () => {
  expect(sum(1,2)).toBe(3)
  expect(sum(1,2)).toEqual(3)
})