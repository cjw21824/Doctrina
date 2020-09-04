grid = []
row = []
columns = 31
rows = 15
for i in range(0,columns):
    row.append('-')
for i in range(0,rows):
    grid.append(row)
for i in grid:
    print(" ".join(i))


ruleset = {'111':0,'110':0,'101':0,'100':1,'011':1,'010': 1,'001':1,'000':0}
currentGen = [0,1,1,1,1,0]
for i in range(0,len(currentGen)):
    CA=[]
    me = currentGen[i]
    if(i > 0):
        before = currentGen[i-1]
    else:
        before = currentGen[i]
        me = currentGen[i+1]
        after = currentGen[i+2]
    if(i < len(currentGen)-1):
        after = currentGen[i+1]