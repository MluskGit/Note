# 1.4查找最大或最小的N个元素
# 问题
# 怎样从一个集合中获得最大或者最小的N个元素列表
# 解决方案
# heapq模块有2个函数:nlargest()和nsmallest()可以完美解决这个问题
import heapq

nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(heapq.nlargest(3, nums))
print(heapq.nsmallest(3, nums))


del  nums[-1]
print(nums)
nums.remove(1)
print(nums)

squares = list(map(lambda x:x**2,nums));
print(squares)

square1 = [x**2 for x in nums if x >0];
print(square1)