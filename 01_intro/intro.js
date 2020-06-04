// самодельная функция для тестирования, без jest
function expect(value) {
  return {
    toBe: exp => {
      if(value === exp) {
        console.log('Success')
      } else {
        console.error(`Value is ${value} but expectation is ${exp}`)
      }
    }
  }
}

const sum = (a, b) => a + b

const nativeNull = () => null

// экспортируем созданные функции 
module.exports = {sum, nativeNull}

// вызываем функцию для проверки; в sum передаем значения, а в toBe - то что ожидаем получить, если они не равны - тест не пройден
// expect(sum(41,1)).toBe(42)