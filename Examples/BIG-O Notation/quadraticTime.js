// Example 1 => Obvious since n work done n times is n*n (O(n^2))
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    // f(n) = n*n = n^2 => O(f(n)) = O(n^2) => Quadratic Time
  }
}

// Example 2
for (let k = 0; k < n; k += 1) {
  for (let l = k; l < n; l += 1) {
    // replaced 0 with k
    // k goes from [0, n) the amount of looping done is directly determined by what k is.
    // if k=0, we do n work, if k=1, we do n-1 work, if k=2, we do n-2 work etc.
    // n(n+1)/2 => O(n(n+1)/2) => O(n^2/2 + n/2) => O(n^2) => Quadratic Time
  }
}
