from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def getNumberArray(self, l: Optional[ListNode]):
        current = l
        n = []
        while current:
            n.append(current.val)
            current = current.next
        return n
    
    def arrayToNumber(self, array):
        pow = 1
        num = 0
        for n in array:
            num += (n * pow)
            pow *= 10
        return num

    def convToListNode(self, number):
        a = []
        n = number
        while n > 0:
            a.append(n - (n // 10) * 10)
            n //= 10
        return a
        
            

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        a1 = Solution.getNumberArray(self, l1)
        a2 = Solution.getNumberArray(self, l2)

        n1 = Solution.arrayToNumber(self, a1)
        n2 = Solution.arrayToNumber(self, a2)
    
        total = Solution.convToListNode(self, n1+n2)
        head = None
        for val in total:
            head = ListNode(val, head)
        return head
        
        



l1 = ListNode(2, ListNode(4, ListNode(3)))
l2 = ListNode(5, ListNode(6, ListNode(4)))
s = Solution()
print(s.addTwoNumbers(l1, l2))
