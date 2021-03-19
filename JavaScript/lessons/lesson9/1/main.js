"use strict";
let square = {
  area(width, height) {
    return width * height;
  },
  perimetr(width, height) {
    return width + height;
  },
};

const width = +prompt('Введите ширину прямоугольника');

const height = +prompt('Введите длину прямоугольника');

alert(`Площадь прямоугольника = ${square.area(width, height)}`);

alert(`Периметр прямоугольника = ${square.perimetr(width, height)}`);