const binary = (num) => {
    let binaryString = ""
    let halfedNum

    while (num !== 0) {
        binaryString = num % 2 + binaryString
        num = Math.floor(num / 2)
    }
    return binaryString || "0"
}

console.log(binary(0)) 