'use strict';
/**
 * lambda语法规则
 * 1.输入参数
 *   在Lambda表达式中，输入参数是Lambda运算符的左边部分。它包含参数的数量可以为0、1或者多个。
 *   只有当输入参数为1时，Lambda表达式左边的一对小括弧才可以省略。
 *   输入参数的数量大于或者等于2时，Lambda表达式左边的一对小括弧中的多个参数质检使用逗号（,）分割。
 *
 * 2.表达式或语句块
 *   多个Lambda表达式可以构成Lambda语句块。
 *   语句块可以放到运算符的右边，作为Lambda的主体。根据主题不同，Lambda表达式可以分为表达式Lambda和语句Lambda。
 *   语句块中可以包含多条语句，并且可以包含循环、方法调用和if语句等。
 *
 */

// 1.输入参数举例
let left = () => console.log('无参数，小括弧不能省略');
let left1 = param => console.log('一个参数，小括弧可以省略', param);
let left2 = (param) => console.log('一个参数，小括弧可以不省略', param);
let left3 = (param1, param2) => console.log('多个参数参数，小括弧不可以省略', param1);


left();
left1('1');
left2('2');
left3('3');


// 2.表达式或语句块举例

let right = m => m * 2;

let right1 = m => {
    console.log('-------------------------------');
    return m * m;
}

console.log(right(2));
console.log(right1(2));