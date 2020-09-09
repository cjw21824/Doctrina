def createGrid():
    grid = []
    width = 31
    middle = (width - 1)/2
    for i in range(0,31):
        if i == middle:
            grid.append('X')
        else:
            grid.append(' ')
    return grid

def create2DGrid():
    grid = []
    width = 31
    height = 31
    for i in range(0,height):
        line = []
        for k in range(0,width):
            line.append('-')
        grid.append(line)
    return grid

def populate2DGrid(grid):
    middle = (len(grid)-1)/2
    middle = int(middle)
    grid[middle-1][middle] = 'X'
    grid[middle-1][middle-1] = 'X'
    grid[middle-1][middle+1] = 'X'
    grid[middle][middle-1] = 'X'
    grid[middle][middle+1] = 'X'
    grid[middle+1][middle] = 'X'
    grid[middle+1][middle+1] = 'X'
    grid[middle+1][middle-1] = 'X'
    return grid


def calculateNextGen(before,me,after):
    value = [before,me,after]
    string = ''.join(value)
    return ruleset[string]
    

ruleset = {'XXX':' ','XX ':' ','X X':' ','X  ':'X',' XX':'X',' X ':'X','  X':'X','   ':' '}
history = []
currentGen = createGrid()
iterations = input('How many iterations do you want to perform: ')
iterations = int(iterations)
print(' '.join(currentGen))
for i in range(0,iterations):
    history.append(currentGen)
    nextGen=[]
    for i in range(0,len(currentGen)):
        before = currentGen[i-1]
        me = currentGen[i]
        try:
            after = currentGen[i+1]
        except:
            after = ' '
        nextGen.append(calculateNextGen(before,me,after))
    currentGen = nextGen
    print(' '.join(currentGen))
grid = populate2DGrid(create2DGrid())
for i in grid:
    print(' '.join(i))