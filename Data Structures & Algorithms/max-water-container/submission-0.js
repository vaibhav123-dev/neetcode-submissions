class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let n = arr.length
        let l = 0
        let r = n - 1
        let maxArea = 0
        while(l<r){
            let area = Math.min(arr[l], arr[r]) * (r-l)
            maxArea = Math.max(area, maxArea)
            if(arr[l] < arr[r]){
                l++
            }else {
                r--
            }
        }
        return maxArea
    }
}
