class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length;
        let maxProfit = 0
        for (let i = 0; i < n - 1; i++) {
            for (let j = n - 1; j > i; j--) {
                let profit = prices[j]-prices[i]
                maxProfit = Math.max(maxProfit, profit)
            }
        }

        return maxProfit
    }
}
