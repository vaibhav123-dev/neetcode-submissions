class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l = 0
        let r = arr.length - 1
        while(l <= r){
            let m = l + Math.floor((r-l)/2)
            if(arr[m] == target){
                return m
            }
            if(arr[l] <= arr[m]){ // left sorted
                if(target < arr[m] && target >= arr[l]){
                    r = m - 1
                }else {
                    l = m + 1
                }
            }else { // right sorted
                if(target > arr[m] && target <= arr[r]){
                    l = m + 1
                }else {
                    r = m - 1
                }
            }
        }
        return -1
    }
}
