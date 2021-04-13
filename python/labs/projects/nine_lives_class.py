import random
lives = 9
words = ["pizza", "fairy", "shirt", "plane", "javascript"]
secret_word = random.choice(words)
clue = []

for x in secret_word:
    clue.append('_ ')  # _ _ _ _ _  pizza
# clue = "_ " * len(secret_word)  # ____  

print(secret_word)
def update_clue(guessed_letter): # p
    index = 0
    print(clue)
    while index < len(secret_word):  #secret_word[index] pizza  p _ _ _ _ 
        if guessed_letter == secret_word[index]:
            clue[index] = guessed_letter  #clue[0]
        index += 1
while lives > 0:
    print(clue)
    print(f"You have {lives} remaining")
    # show the number char need to guess  p _ _ _ _
    # input a char
    guess = input('Guess a letter or the whole word: ')  # p
    if guess in secret_word :
        # function update our clue 
        # take guess, secret, clue
        update_clue(guess)
    else:
        print('Incorrect. You lose a life')
        lives -= 1
    # check to see if that char is a letter in the word
    ## true: need to see the word with their guess
    ## if the word has been guessed, then exit out of while