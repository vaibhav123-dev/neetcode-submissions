class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let left = 0
        let min = prices[0]
        let maxProfit = 0

        for(let i=1; i<n; i++){
            if(prices[i] < min){
                min = prices[i]
            }else{
                maxProfit = Math.max(maxProfit, (prices[i]- min))
            }
        }

        return maxProfit
    }
}
