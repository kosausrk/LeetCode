/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//First LinkedList
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode() //Creating new LinkedList
    let current = dummy //Current placeholder element 

    while (list1 && list2){
        if (list1.val < list2.val){
            current.next = list1
            list1 = list1.next
        }
        else{
            current.next = list2
            list2 = list2.next
        }
    }
    current = current.next

    if (list1 !== null) {
        current.next = list1;
    }

    if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
}




listA = [1,2,3]
listB = []
mergeLists(listA, listB)

