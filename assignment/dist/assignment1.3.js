"use strict";
{
    function concatenateArrays(...arrays) {
        //return arrays.flat();
        return arrays.reduce((arr, crr) => arr.concat(crr), []);
    }
    console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
}
