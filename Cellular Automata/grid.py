
def calculateNextGen(before,me,after):
    value = [before,me,after]
    string = ''.join(value)
    return ruleset[string]
    

ruleset = {'XXX':'-','XX-':'-','X-X':'-','X--':'X','-XX':'X','-X-':'X','--X':'X','---':'-'}
currentGen = ['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','X','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-']
iterations = 15
print(' '.join(currentGen))
for i in range(0,iterations):
    nextGen=[]
    for i in range(0,len(currentGen)):
        before = currentGen[i-1]
        me = currentGen[i]
        try:
            after = currentGen[i+1]
        except:
            after = '-'
        nextGen.append(calculateNextGen(before,me,after))
    currentGen = nextGen
    print(' '.join(currentGen))



