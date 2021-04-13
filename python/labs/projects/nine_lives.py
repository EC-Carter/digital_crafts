import random

lives = 9
words = ["hello", "pizza", "atlanta", "socks", "python","function" ]
the_word = random.choice(words)
word_placeholder = []
correct_guesses = 0
guessed = False
for i in the_word:
    word_placeholder.append("_ ")

def update_placeholder(the_guess):
    count = 0
    global word_placeholder
    global guessed
    while count < len(the_word):
        if the_guess == the_word[count]:
            word_placeholder[count] = the_guess
        count += 1
    if the_guess == the_word or "_ " not in word_placeholder:
        word_placeholder = list(the_word)
        guessed = True

print("Try and guess a secret word. \nYou have 9 lives to start. \nEvery time you guess incorrectly you lose a life. Good Luck!")
while lives > 0:
    print(word_placeholder)
    print(f"you have {lives} lives left")
    guess = input("guess a letter or the word: ")
    guess = guess.lower()
    update_placeholder(guess)       
    if guessed == True:
        print("You guessed it!")
        print(word_placeholder)
        break
    elif guess in the_word:
        # where func call was
        print("you got one!")
        correct_guesses += 1
    else:
        print("Incorrect. You lose a life")
        lives -= 1
if lives == 0:
    print("Sorry, You lost")







