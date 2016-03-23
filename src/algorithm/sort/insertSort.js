'use strict';
/**
 * 插入排序，数组复制实现方式，在数据100以内比默认的排序方式快，
 * 排序不会修改原数组
 * @param arr
 */
function sort(arr) {
    let ret = [];
    if (!Array.isArray(arr) || arr.length === 0) {
        return ret;
    }
    ret[0] = arr[0];
    for (let i = 1, length = arr.length; i < length; i++) {
        let item = arr[i];
        for (let j = ret.length - 1; j >= 0; j--) {
            if (item >= ret[j]) {
                ret.splice(j + 1, 0, item);
                break;
            }
            if (j === 0 && item < ret[j]) {
                ret.splice(0, 0, item);
            }

        }
    }
    return ret;
}

/**
 * 插入排序第二种实现方式，在数据250以内比默认的排序方式快，
 * 排序会直接修改原数组
 * @param arr
 */
function sort2(a) {
    for (let i = 1, n = a.length; i < n; i++) {
        if (a[i] < a[i - 1]) {               //若第i个元素大于i-1元素，直接插入。小于的话，移动有序表后插入
            let j = i - 1;
            let x = a[i];        //复制为哨兵，即存储待排序元素
            a[i] = a[i - 1];           //先后移一个元素
            while (x < a[j]) {  //查找在有序表的插入位置
                a[j + 1] = a[j];
                j--;         //元素后移
            }
            a[j + 1] = x;      //插入到正确位置
        }
    }
    return a;
}


exports.sort = sort2;