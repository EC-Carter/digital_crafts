letters = "abcdefghijklmnopqrstuvwxyz"
phrase_encrypt = ""
phrase_decrypt = ""
done = "x"

def encode():
    global phrase_encrypt
    phrase_encrypt = ""
    phrase = input("what would you like to encrypt?: ")
    phrase = phrase.lower()
    for i in phrase: 
        if i.isalpha() == True:
            n = letters[(letters.index(i) + 13) % 26]
        else:
            n = i
        phrase_encrypt += phrase_encrypt.join(n)
    print (phrase_encrypt)

def decode():
    global phrase_decrypt
    phrase_decrypt = ""
    phrase = input("what would you like to decrypt?: ")
    phrase = phrase.lower()
    for i in phrase: 
        if i.isalpha() == True:
            n = letters[(letters.index(i) - 13) % 26]
        else:
            n = i
        phrase_decrypt += phrase_encrypt.join(n)
    print (phrase_decrypt)



print("Welocme to the Caesar Cipher.")

while done != "end":
    
    what_to_do = input("""Type 'encode' to encrypt a secret message.
Type 'decode' to decrypt a secret message.
Type 'end' to end the program.
""")
    what_to_do = what_to_do.lower()
    

    if what_to_do == "encode":
        encode()
    elif what_to_do == "decode":
        decode()
    elif what_to_do == "end":
        done = "end"
        print("Ok bye!")
