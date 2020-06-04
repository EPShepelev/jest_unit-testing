const {sum, nativeNull} = require('./intro')

describe('Sum function:', () => {
  // в callback функции описываем тест; toBe и toEqual это "мэтчеры"
test('should return sum of two values', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).toEqual(3)
})

test('should return sum value correctly comparing to other valuse', () => {
  expect(sum(2, 3)).toBeGreaterThan(4)
  expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
  expect(sum(2, 3)).toBeLessThan(7)
  expect(sum(2, 3)).toBeLessThanOrEqual(5)
})

test('should return sum of two float values correctly', () => {
  // expect(sum(0.1, 0.2)).toBe(0.3) тест не пройдет - из-за округления в js; используем другой матчер
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
})
})

describe('Native null function:', () => {
  test('should return null value', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})

