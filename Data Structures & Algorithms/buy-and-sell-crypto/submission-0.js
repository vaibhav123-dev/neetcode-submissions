class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let min = prices[0]
        let maxP = 0
        for(let i=1; i<n; i++){
            let profit = prices[i]-min
            maxP = Math.max(profit, maxP)
            if(prices[i] < min){
                min = prices[i]
            }
        }
        return maxP
    }
}
