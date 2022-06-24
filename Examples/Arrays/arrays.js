const nums = [];

// write/update - O(1)
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

// O(1)
nums.push(4);
nums.push(5);

// O(n)
nums.unshift(0);
nums.unshift(-1); // [-1, 0, 1, 2, 3, 4, 5]

// delete - O(n)
nums.splice(4, 1); // [ -1, 0, 1, 2, 4, 5 ]

const a = [34, 4];
a.push(-7); // [ 34, 4, -7 ]
a.push(34); // [ 34, 4, -7, 34 ]
a.splice(1, 1); // [ 34, -7, 34 ]
