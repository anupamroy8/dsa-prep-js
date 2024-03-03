// Best time to buy and sell stock

// [7, 1, 5, 3, 6, 4] =>  5

// const maxProfit = (prices) => {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length-1; i++) {
//     for (let j = i+1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];

//       if (currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }
//   return globalProfit;
// };

// Using Greedy Algorithm

// const maxProfit = (prices) => {
//   let minStockPrice = prices[0] || 0;
//   profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minStockPrice) {
//       minStockPrice = prices[i];
//     }
//     let currentProfit = prices[i] - minStockPrice;
//     profit = Math.max(profit, currentProfit);
//   }
//   return profit;
// };

// Alternate solution 1

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}


// Alternate solution 2


// var maxProfit = function(prices) {
//   let left = 0;
//   let right = 1;
//   let res = 0;
//   while(right < prices.length) {
//       if(prices[left] < prices[right]) res = Math.max(res, prices[right] - prices[left]);
//       else left = right;
//       right++;
//   }
//   return res;
// };

console.log("====================================");
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log("====================================");
