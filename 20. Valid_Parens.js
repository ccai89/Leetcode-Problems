/* Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
*/

const isValid = (str) => {
  if(str.length === 0) return true;
  if(str.length%2 === 1) return false;

  let dictionary = {
    ']':'[',
    '}':'{',
    ')':'(',
  }

  const stack = [];

  for(let i = 0; i < str.length; i++) {
    if(stack[stack.length - 1] !== dictionary[str[i]]) stack.push(str[i]);
    else stack.pop();  
  }
  return stack.length === 0;
}

console.log(isValid('(]'));