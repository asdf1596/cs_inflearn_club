function MergeSort(arr, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        let midIndex = parseInt((leftIndex + rightIndex) / 2);
        MergeSort(arr, leftIndex, midIndex);
        MergeSort(arr, midIndex + 1, rightIndex);
        Merge(arr, leftIndex, midIndex, rightIndex);
    }
}
function Merge(arr, leftIndex, midIndex, rightIndex) {
    let leftAreaIndex = leftIndex;
    let rightAreaIndex = rightIndex + 1;

    let temparr = [];
    temparr.length = rightIndex + 1;
    temparr.fill(0, 0, rightIndex + 1);

    let tempArrIndex = leftIndex;
    while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
            temparr[tempArrIndex] = arr[leftAreaIndex++];
        } else {
            temparr[tempArrIndex] = arr[rightAreaIndex++];
        }
        tempArrIndex++;
    }

    if (leftAreaIndex > midIndex) {
        for (let i = rightAreaIndex; i <= rightIndex; i++) {
            temparr[tempArrIndex] = arr[i];
        }
    } else {
        for (let i = leftAreaIndex; i <= midIndex; i++) {
            temparr[tempArrIndex] = arr[i];
        }
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        arr[i] = temparr[i];
    }
}

let arr = [3, 5, 2, 4, 1, 7, 8, 6];
console.log(arr);
MergeSort(arr);
console.log(arr);
