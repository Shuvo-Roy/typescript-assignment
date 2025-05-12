{

    function processValue(value: string | number): number{
        // if(typeof value=== "string"){
        //     return value.length;
        // }else {
        //     return value * 2;
        // }
        if(typeof value=== "string"){
            return value.length;
        }else if(typeof value ==="number"){
            return value * 2;
        }else{
            throw new Error;
        }
    }
    console.log(processValue("hello"));
    console.log(processValue(10));
}