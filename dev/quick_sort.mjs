function quicksort(arr, left, right) {
    if (left <= right) {
        let pivot = divide(arr, left, right);
        quicksort(arr, left, pivot - 1);
        quicksort(arr, pivot + 1, right);
    }
}

function divide(arr, left, right) {
    let pivot = arr[left];
    let leftStartIndex = left + 1;
    let rightStartIndex = right;

    while (leftStartIndex <= rightStartIndex) {
        while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
            leftStartIndex++;
        }
        while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
            rightStartIndex--;
        }
        if (leftStartIndex <= rightStartIndex) {
            swap(arr, leftStartIndex, rightStartIndex);
        }
    }

    swap(arr, left, rightStartIndex);
    return rightStartIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];
console.log(arr);
quicksort(arr, 0, arr.length - 1);
console.log(arr);
