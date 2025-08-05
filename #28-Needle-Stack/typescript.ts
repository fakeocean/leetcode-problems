function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const index = i
            for (let j = 1; j < needle.length; i++) {
                if (i+j < haystack.length) {
                    if (haystack[i+j] !== needle[j+i]) {
                        return -1
                    }
                    return index
                }
                else return -1
                
            }
        }
    }
} 

const haystack = "sadbutsad"
const needle = "sad"
const res = strStr(haystack, needle)
console.log(res)
