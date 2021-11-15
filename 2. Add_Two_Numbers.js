/**
* 2. Add Two Numbers
* You are given two non-empty linked lists representing two non-negative integers. * The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
* You may assume the two numbers do not contain any leading zero, except the number 0 itself.
* Example 1:
*   Input: l1 = [2,4,3], l2 = [5,6,4]
*   Output: [7,0,8]
*   Explanation: 342 + 465 = 807.
* Example 2:
*   Input: l1 = [0], l2 = [0]
*   Output: [0]
* Example 3:
*   Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
*   Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  // creating a new LL to hold result
  const result = new ListNode(0, null);
  // setting up vars to be updated; node = head of result LL, carry for sums >= 10
  let node = result, carry = 0, sum = 0;

  // checks if either LL is still not finished iterating through
  while (l1 || l2) {
    // finds the sum of current LL node if not *null* and adds on carry value
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // sets carry to 1 if sum >= 10 to maintain single digit per node
    sum >= 10 ? carry = 1 : carry = 0;
    // sets node value to single digit regardless, spill over saved to carry
    node.val = sum % 10;
    // iterates to next node if existing
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    // checks if either LL can still iterate, if so continue, if not then add the carry over value as a new node
    if (carry !== 0 || l1 || l2) {
      node.next = new ListNode(carry, null);
      node = node.next;
    }
  }
  return result;
};