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

def CalculateNextGen2D(x,y,grid):
    neighbors=[]
    for i in range(0,8):
        if i == 0:
            if y-1 < 0:
                neighbors.append('-')
            else:
                neighbors.append(grid[y-1][x])
        elif i == 1:
            if y-1 < 0 or x-1 < 0:
                neighbors.append('-')
            else:
                neighbors.append(grid[y-1][x-1])
        elif i == 2:
            if y-1 < 0:
                neighbors.append('-')
            else:
                try:
                    neighbors.append(grid[y-1][x+1])
                except:
                    neighbors.append('-')
        elif i == 3:
            if x-1 < 0:
                neighbors.append('-')
            else:
                neighbors.append(grid[y][x-1])
        elif i == 4:
            try:
                neighbors.append(grid[y][x+1])
            except:
                neighbors.append('-')
        elif i == 5:
            try:
                neighbors.append(grid[y+1][x])
            except:
                neighbors.append('-')
        elif i == 6:
            try:
                neighbors.append(grid[y+1][x+1])
            except:
                neighbors.append('-')
        elif i == 7:
            if x-1<0:
                neighbors.append('-')
            else:
                try:
                    neighbors.append(grid[y+1][x-1])
                except:
                    neighbors.append('-')
    if grid[y][x] == 'X':
        if neighbors.count('X') == 2 or neighbors.count('X') == 3:
            return 'X'
        else:
            return '-'
    elif grid[y][x] == '-':
        if neighbors.count('X') == 3:
            return 'X'
        else:
            return '-'

def calculateNextGen(before,me,after,ruleset):
    value = [before,me,after]
    string = ''.join(value)
    return ruleset[string]
    
def playRuleOf30():
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
            nextGen.append(calculateNextGen(before,me,after,ruleset))
        currentGen = nextGen
        print(' '.join(currentGen))

def PlayGameOfLife():
    currentGrid = populate2DGrid(create2DGrid())
    for i in range(0,1000):
        nextGrid = currentGrid
        for i in range(0,len(currentGrid)):
            for k in range(0,len(currentGrid[i])):
                nextValue = CalculateNextGen2D(k,i,currentGrid)
                nextGrid[i][k] = nextValue
        currentGrid = nextGrid
    for i in currentGrid:
        print(' '.join(i))


playRuleOf30()
for i in range(0,5):
    print(" ")
PlayGameOfLife()