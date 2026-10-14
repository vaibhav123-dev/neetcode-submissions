class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length

        let left = 0
        let right = n-1
        let mostWater = 0
        while(left<right) {
            let width = right-left
            let minHeight = Math.min(heights[left], heights[right])
            let area = width * minHeight

            if(heights[left] < heights[right]){
                left++
            }else{
                right--
            }
            
            mostWater = Math.max(mostWater, area)

        }

        return mostWater
    }
}
