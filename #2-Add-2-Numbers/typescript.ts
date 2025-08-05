function conv(l: number[]) {
    let res = 0
    let pow = 1
    for (const n of l) {
        res += (n * pow)
        pow *= 10
    }
    return res
}

function addTwoNumbers(l1: number[] | null, l2: number[] | null) {
    if (!l1 || !l2) return
    const array: number[] = []
    let total = conv(l1) + conv(l2)

    while (total > 0) {
        const t = Math.floor(total / 10)
        const difference = (t * 10)
        array.push(total - difference)
        total = Math.floor(total / 10)
    }
    return array
}

const l1 = [9,9,9,9,9,9,9]
const l2 = [9,9,9,9]
console.log(addTwoNumbers(l1, l2))