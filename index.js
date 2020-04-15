// Написать функцию, которая принимает на вход массив чисел и возвращает массив
// соотношений этих чисел с точностью до 2 знаков после запятой
// [3, 1] -> [0.75, 0.25]
// (values: numbers[]) => numbers[]
module.exports.getRatio = (values) => {
  return values;
};

// Написать функцию, которая группирует элементы массива по значению из функции fn
// Функция fn не обязательна, если ее нет, то группировка происходит по значению элемента
// (items: Array<T>, fn: (value: T) => K): { [key: K]: Array<T> }
module.exports.groupBy = (items, fn) => {
  return {};
};

// Написать функцию, которая принимает dot-путь к значению и возвращает по нему значение из объекта
// get('my.nested.value', obj) должно делать тоже самое, что и obj.my.nested.value (только без исключений)
// (path: string, obj: any) => any
module.exports.get = (path, obj) => {
  return obj;
};

// Переписать функцию без async/await
// (initialValue: T, run: (v: T) => T) => Promise<T>
module.exports.process = async (initialValue, run) => {
  try {
     return run(await run(initialValue));
  } catch (err) {
    return err.message;
  }
};
