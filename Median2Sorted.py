#leetcode hard massimo vs koushik 

#massimo: 34:15
#koushik: 36:19
#lost bc of a index issue smh

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        nums1Len = len(nums1)
        nums2Len = len(nums2)

        merged = []
        i, j = 0, 0

        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                merged.append(nums1[i])
                i += 1
            else:
                merged.append(nums2[j])
                j += 1

        #merged both lexigraphically 
        merged.extend(nums1[i:])
        merged.extend(nums2[j:])
        

        lenMerge = len(merged)
        if lenMerge % 2 == 0:
            tempIndex1 = (lenMerge // 2) - 1  
            tempIndex2 = (lenMerge // 2)      
            finalMedian = (merged[tempIndex1] + merged[tempIndex2]) / 2.0  # 
            return finalMedian
    
    
        else:
            return merged[lenMerge // 2]  #middle 

        # #merge 2 lists -> median is low to high, current value if less move back vice versa 
        # #loop needs to find middle val if even and if odd split by 2 and add 1 

        # #even: [1,2,3,4] -> median is 2 + 3/ 2 = 2.5 
        # #odd: [1,2,3] --> index 1, 
        # #odd: [1,2,3,4,5] -->  5// 2 --> 2 floor division, index[2] = 3 median 
    