def main():
    # Getting the user input for the size of the game
    rows = int(input("How many rows: "))
    cols = int(input("How many cols: "))
    # Defining the initial board
    board = []
    # Getting the user input for where to start the game
    x = int(input("Start x location: "))
    y = int(input("Start y location: "))
    
    #Populating the initial board setup with blank spaces and start locations
    for i in range (rows):
        board.append([])
        for j in range (cols):
            board[i].append(" ")
    board[y][x] = "X"
    printBoard(board, cols, rows)
    
    #Loop to watch for move entries from the user
    while True:
        nextMove = str(raw_input("Where to next? "))
        if nextMove == "down":
            if y+1 < rows:
                y+=1
                board[y][x] = "X"
                printBoard(board, cols, rows)
            else:
                print "Off the edge!"
        if nextMove == "up":
            if y-1 >= 0:
                y-=1
                board[y][x] = "X"
                printBoard(board, cols, rows)
            else:
                print "Off the edge!"
        if nextMove == "left":
            if x-1 >= 0:
                x-=1
                board[y][x] = "X"
                printBoard(board,cols,rows)
            else:
                print "Off the edge!"
        if nextMove == "right":
            if x+1 < cols:
                x+=1
                board[y][x] = "X"
                printBoard(board, cols, rows)
            else:
                print "Off the edge!"
        if nextMove == "clear" or nextMove == "shake":
            clearBoard(board, cols, rows)
        
#Function to print the board to the console
def printBoard(board, cols, rows):
    for i in range (rows):
        for j in range (cols):
            if j == cols-1:
                print board[i][j]
            else:
                print board[i][j],

# Function to clear the board                
def clearBoard(board, cols, rows):
    for i in range (rows):
        for j in range (cols):
            board[i][j] = " "
    printBoard(board, cols, rows)
    
if __name__ == "__main__":
    main()