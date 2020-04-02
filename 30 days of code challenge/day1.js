/*
DAY1 :  Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

//sOLUTIONS

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Solution one
 */

var singleNumber = function (nums) {
var totalArr = nums.reduce(function(a,b){return a + b},0);

var set = new Set(nums);

var setArr = Array.from(set);

var totalSet = 2 * (setArr.reduce(function(a,b){return a + b},0));


var number = totalSet - totalArr;

return number;
};

/*
 * Solution two with a linear runtime complexity
 */

var singleNumber = function (nums) {
   var res = nums[0]; 
        for (var i = 1; i < nums.length; i++) {
            res = res ^ nums[i]; 
        }
        console.log(res); 
    };

//test cases
//
//singleNumber([2,2,1]);
//singleNumber([4,1,2,1,2]);