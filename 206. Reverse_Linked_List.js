/**
 Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let node = head;
  // acting as the node.next for the tail
  let previous = null;
  while(node){
    // keeps the next node still in memory as link is broken
    let temp = node.next; 
    // breaking the link and setting the next value of current node to the one before it, giving it a new next
    node.next = previous;
    // setting next previous to the current node in preparation to go down the LL
    previous = node;
    // going onto the next node in the LL
    node = temp;
  }
  // returning the new head
  return previous;
};