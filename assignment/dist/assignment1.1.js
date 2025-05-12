"use strict";
{
    function formatString(input, toUpper) {
        if (toUpper) {
            console.log(input.toUpperCase());
            return input.toUpperCase();
        }
        else {
            console.log(input);
            return input;
        }
    }
    formatString("hello", true);
}
