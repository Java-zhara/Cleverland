"use strict";
function SectorArea(R, α) {
  this.radius = R;
  this.degree = α;

  this.calcSectorArea = function () {
    const π = 3.14;
    const S = π * R ** 2 * α / 360;
    console.log(S);
  };
};

const radius = +prompt('Введите радиус сектора')

const degree = +prompt('Введите градусную меру центрального угла');

const sectorArea = new SectorArea(radius, degree);

sectorArea.calcSectorArea();