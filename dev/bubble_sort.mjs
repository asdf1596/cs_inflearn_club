function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; i++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
let arr = [4, 2, 1, 3];
console.log("=====정렬 전=====");
console.log(arr);
BubbleSort(arr);
console.log("=====정렬 후====");
console.log(arr);
