const countTrue = (arr) => {
    let count = 0
    if (arr.length == 0) { return 0 }
    else {
        arr.forEach(element => {
            if (element === true) { count++ }
        });
    }
    return count
}