the_board = [['0,0','0,1','0,2'],['1,0','1,1','1,2'],['2,0','2,1','2,2']]
the_location = (0,0)
the_player = "Y"

def move(board,location,player):
    #throw errors
    if len(board) > 3:
        print ("wrong size")
        return
    # generate board visual
        row1 = board[0]
        row2 = board[1]
        row3 = board[2]
        print(f'{row1}\n\n{row2}\n\n{row3}')
    #place string
    #return value


the_play = move(the_board,the_location,the_player)
