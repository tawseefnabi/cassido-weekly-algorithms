// Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if there is a one-to-one mapping 
// possible for every character of the first string to every character of the second string.

// Example:

// > isIsomorphic('abb', 'cdd')
// > true // 'a' maps to 'c' and 'b' maps to 'd'

// > isIsomorphic('cassidy', '1234567')
// > false // 's' cannot have a mapping to both '3' and '4'

// > isIsomorphic('cass', '1233')
// > true


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(str1, str2){
  for(let i=0;i<str1.length;i++){
    if(str1.indexOf(str1[i], i+1) !== str2.indexOf(str2[i], i+1)){
      return console.log(false)
    }
  }
  return console.log(true)

}
isIsomorphic('abb', 'cdd')
isIsomorphic('cassidy', '1234567')
isIsomorphic('cass', '1233')


function isIsomorphic_v2(str1, str2){
  if(str1.length !== str2.length){
    return console.log(false)
  }
  const map1 = new Map()
  const map2 = new Map()
  for(let i=0;i<str1.length;i++){
    char1 = str1[i]
    char2 = str2[2]
    if(map1.has(char1)){
      if(map1.get(char1) != char2){
        return false
      }
    } else{
      map1.set(char1,char2)
    }
    if(map2.has(char2)){
      if(map2.get(char2 !== char1)){
        return false
      }
    } else{
      map2.set(char2, char1)
    }
  }
  return true
}

isIsomorphic_v2('abb', 'cdd')
isIsomorphic_v2('cassidy', '1234567')
isIsomorphic_v2('cass', '1233')