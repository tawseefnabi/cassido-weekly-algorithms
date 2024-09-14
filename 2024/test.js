// Use recursive functions to flatten a deeply nested array. ([1, [2, [3, 4], 5], 6]) ensure no loops


// without for loop
function flattenArray(arr){
    let result = []
    if (arr.length ==0 ) return result
    if(Array.isArray(arr[0])){
        result = result.concat(flattenArray(arr[0]))
    } else {
        result.push(arr[0])
    }
    result = result.concat(flattenArray(arr.slice(1)))
    return result
}
const nestedArray = [1, [2, [3, 4], 5], 6]
console.log(flattenArray(nestedArray)) 

function flattenArrayv2(arr){
    let result = []
    // recursive functio to process each element
    function recurse(element){
        // if element is an array recursively flatten each item
        if(Array.isArray(element)){
            if(element.length >0){
                // process first item in array
                recurse(element[0])
                // process rest of elemen
                recurse(element.slice(1))
            }
            } else{
                // if elet in ot an an array add it to result 
                result.push(element)
        }
    }
    recurse(arr) // start recursive with initial array 
    return result
}

console.log(flattenArrayv2(nestedArray)) 
