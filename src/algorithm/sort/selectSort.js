'use strict';

/**
 * 选择排序
 * @param arr
 * @returns {Array}
 */
function sort(arr) {
    for (let i = 0, length = arr.length; i < length - 1; i++) {
        let tmp;
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }

        }
    }
}

function sort2(r) {
    let i, j, min, max, tmp;
    let n = r.length;
    for (i = 1; i <= n / 2; i++) {
        // 做不超过n/2趟选择排序
        min = i;
        max = i; //分别记录最大和最小关键字记录位置
        for (j = i + 1; j <= n - i; j++) {
            if (r[j] > r[max]) {
                max = j;
                continue;
            }
            if (r[j] < r[min]) {
                min = j;
            }
        }
        //该交换操作还可分情况讨论以提高效率
        tmp = r[i - 1];
        r[i - 1] = r[min];
        r[min] = tmp;
        tmp = r[n - i];
        r[n - i] = r[max];
        r[max] = tmp;

    }
}

exports.sort = sort2;