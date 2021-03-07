"use strict";
let buyInShop = (costPurchase, sumCash) => {

  if(costPurchase <= sumCash) {
    return sumCash - costPurchase;
  } else {
    return 'Недостаточная сумма для оплаты';
  };

}; 
  
let costPurchase = +prompt('Введите стоимость покупки');
let sumCash = +prompt('Введите сумму внесенную в кассу');

console.log (buyInShop(costPurchase, sumCash));