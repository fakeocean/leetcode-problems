/**
 * @title Valid Parentheses #20
 * @difficulty Easy
 * @link https://leetcode.com/problems/valid-parentheses
 */

/**
 * We have a @function isValid(s: string) that returns boolean;
 * @returns true if parenthesis is valid,
 * @returns false if parenthesis isn't valid.
 */

/**
 * What do we define as a valid parenthesis?
 * 
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in correct order.
 * 3. Every close bracket has corresponding open bracket of the same type.
 * 
 * @examples
 * s = "()"             <- true
 * s = "()[]{}"         <- true
 * s = "(]"             <- false
 * s = "({})"           <- true
 * s = "([)]"           <- false
 */

/*
 * My approach acts on the same logic as every other answer on leetcode.
 * 
 * stack    = string array variable,
 * last     = last index of the array,
 * c        = interated character in a string,
 * ob       = open bracket e.g. (, {, [,
 * cb       = closed bracket e.g. ), }, ].
 * 
 * 1. Make a guard statement for uneven string length.
 * 2. Make a stack.
 * 3. Create a for loop that iterates through every character in a string.
 * 4. Inside for loop create a switch statement that checks for the following;
 * 
 *      if c === ob             -> add it to stack
 *      else if stack is empty  -> return false
 *      else (
 *          if c === cb && c[last] === ob ||
 *          ... so on for all brackets 
 *      )                       -> remove last element of the stack
 *      
 *      return stack.length === 0
 */

function isValid(s: string): boolean {
    if (s.length % 2 === 1) {
        return false            // 1. Guard statement
    }

    const stack: string[] = []  // 2. Stack

    for (const c of s) {     // 3. For loop
        console.log(stack, c)
        switch (true) {         // 4. Switch statement and logic.
            case c === '(' || c === '{' || c === '[':
                stack.push(c)
                break
            case stack.length === 0:
                return false
            case (
                c === ')' && stack[stack.length-1] === '(' ||
                c === '}' && stack[stack.length-1] === '{' ||
                c === ']' && stack[stack.length-1] === '['
            ):
                stack.pop()
                break
            default:
                return false
        }
    }

    return stack.length === 0
}

const parenthesis = "([}}])"
const result = isValid(parenthesis)
console.log(result)