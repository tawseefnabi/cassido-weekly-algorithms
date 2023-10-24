// Given a string s, you are allowed to delete at most k characters. Find if 
// the string can be a palindrome after deleting at most k characters.

// kPal('abcweca', 2)
// > true

// > kPal('acxcb', 1)
// > false


function kPal(s, k) {
  const n = s.length;
  
  // Create a 2D array to store the length of the longest palindromic subsequence
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  // Initialize the diagonal elements to 1 because a single character is a palindrome.
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Fill the dp array
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  // Length of the longest palindromic subsequence
  const lpsLength = dp[0][n - 1];

  // Check if it's possible to make a palindrome by deleting characters
  return console.log(n - lpsLength <= k)
}



kPal('acxcb', 1)
kPal('abcweca', 2)
