'use strict';

const myFun = (param, more = 'more with default') => 
  console.log('arrow function with params and more?', param, more);


function veryOld(param) {
  console.log('very old', param);
}

const middleOld = function(param) {
  console.log('middleOld', param);
};

myFun('test');
myFun('test', 'moro');
veryOld('old school function');
middleOld('middle test');
