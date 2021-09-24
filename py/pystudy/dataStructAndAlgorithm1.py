# 1.3 保留最后N个元素
# 问题
# 在迭代操作或者其他操作的时候,怎样只保留最后有限的几个元素的历史记录
# 解决方案
# 保留有限历史记录正是collections.deque大显身手
from collections import deque
def search(lines,pattern,history=5):
    previous_lines = deque(maxlen=history)
    for line in lines:
        if pattern in line:
            yield line,previous_lines
            pass
        previous_lines.append(line)
    pass
if __name__=='__main__':
    with open(r'../cookbook/somefile.txt',encoding='utf-8') as f:
        for line,prevlines in search(f,'旭涛',5):
            for pline in prevlines:
                print(pline,end='')
                pass
            print(line,end='')
            print('-'*20)
    pass