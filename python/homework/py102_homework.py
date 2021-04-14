# 1. Multiply Vectors
# [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

# nums1 = [2, 4, 5]
# nums2 = [2, 3, 6]
# nums_multi = []

# for index, num in enumerate(nums1):
#     product = num * nums2[index]
#     nums_multi.append(product)
# print(nums_multi)
##################################

# 2. Matrix Addition
# list1 = [[2, 2],[5, 3]]
# list2 = [[4,7],[5,2]]
# list3 = [["",""],["",""]]
# 
# for i in range(0,2):
#     result1 = (list1[0][0] + list2[0][0])
#     result2 = (list1[1][0] + list2[1][0])
#     result3 = (list1[0][1] + list2[0][1])
#     result4 = (list1[1][1] + list2[1][1])
# print(f"{result1} {result2}\n{result3} {result4}")
##################################

# 3. Matrix Addition II
# list1 = [[2, 2],[5, 3]]
# list2 = [[4,7],[5,2]]
# sum_list = []

# x = 2
# for index1 in range(x) :
#     list3 = []
#     for index2 in range(x):
#         list3.append(list1[index1][index2] + list2[index1][index2])

#     sum_list.append(list3)
# print(sum_list)
####################################

#4. De-dup
# list_nums = [4,7,8,8,12,15,18,12,4,2,8]
# no_dups = []

# for i in list_nums:
#     if i not in no_dups:
#         no_dups.append(i)
# print(no_dups)
##################################
# #5. Leetspeak
# norm_speak = input("What would you like to translate?: ")
# norm_speak = norm_speak.upper()

# for i in norm_speak:
#     if i == "A":
#         norm_speak = norm_speak.replace("A","4") 
#     elif i == "E":
#         norm_speak = norm_speak.replace("E","3") 
#     elif i == "G":
#         norm_speak = norm_speak.replace("G","6") 
#     elif i == "I":
#         norm_speak = norm_speak.replace("I","1") 
#     elif i == "O":
#         norm_speak = norm_speak.replace("O","0") 
#     elif i == "S":
#         norm_speak = norm_speak.replace("S","5") 
#     elif i == "T":
#         norm_speak = norm_speak.replace("T","7") 

# print(norm_speak)
#########################################

#6. long long vowels

# lvowels = input("What would you like to say?")
# lvowels = lvowels.lower()
# vowli = ["a","e","i","o","u"]
# for i in vowli:
#     lvowels = lvowels.replace(i, i * 5)
# print(lvowels)
######################################
# 7. ceaser cipher
# index of (letter + 13) % 25 = 0, alph.index("l")

#find finished version in ceaser_ciper.py in the python directory




#____________________________________________________________________________

# for i in phrase:
#     i = letters.index( i + 13) % 25
#     print (phrase)

#     TypeError: can only concatenate str (not "int") to str

# for i in phrase:
#     key = letters.index(i) + 13 % 25
#     phrase_encrypt = phrase_encrypt.join(letters[key])
#     print (phrase_encrypt)

#     IndexError: string index out of range

# for i in phrase: 
#     if i == " " or isinstance(i, str) == False:
#         n = i
#     else:
#         n = letters[(letters.index(i) + 13) % 26]
#     phrase_encrypt += phrase_encrypt.join(n)

# print (phrase_encrypt

#_____________________________________________________________________________

# # get the word or phase from user
# phrase = input("what would you like to encrypt?: ")
# phrase = phrase.lower()

# #create the key
# letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
# alpha_list = list(letters)
# key = []
# encrypt_phrase = []

# for i in alpha_list:
#     shift = alpha_list[alpha_list.index(i) + 13]
#     key.append(shift)

# key = key[:26]


# for i in phrase:
#     if i == "a":
#         phrase = phrase.replace("a", key[0])
#     if i == "b":
#         phrase = phrase.replace("b", key[1])
#     if i == "c":
#         phrase = phrase.replace("c", key[2])
#     if i == "d":
#         phrase = phrase.replace("d", key[3])
#     if i == "e":
#         phrase = phrase.replace("e", key[4])
#     if i == "f":
#         phrase = phrase.replace("f", key[5])
#     if i == "g":
#         phrase = phrase.replace("g", key[6])
#     if i == "h":
#         phrase = phrase.replace("h", key[7])
#     if i == "i":
#         phrase = phrase.replace("i", key[8])
#     if i == "j":
#         phrase = phrase.replace("j", key[9])
#     if i == "k":
#         phrase = phrase.replace("k", key[10])
#     if i == "l":
#         phrase = phrase.replace("l", key[11])
#     if i == "m":
#         phrase = phrase.replace("m", key[12])
#     if i == "n":
#         phrase = phrase.replace("n", key[13])
#     if i == "o":
#         phrase = phrase.replace("o", key[14])
#     if i == "p":
#         phrase = phrase.replace("p", key[15])
#     if i == "q":
#         phrase = phrase.replace("q", key[16])
#     if i == "r":
#         phrase = phrase.replace("r", key[17])
#     if i == "s":
#         phrase = phrase.replace("s", key[18])
#     if i == "t":
#         phrase = phrase.replace("t", key[19])
#     if i == "u":
#         phrase = phrase.replace("u", key[20])
#     if i == "v":
#         phrase = phrase.replace("v", key[21])
#     if i == "w":
#         phrase = phrase.replace("w", key[22])
#     if i == "x":
#         phrase = phrase.replace("x", key[23])
#     if i == "y":
#         phrase = phrase.replace("y", key[24])
#     if i == "z":
#         phrase = phrase.replace("z", key[25])
#     if i == " ":
#         phrase = phrase.replace(" ", " ")
    
# print(phrase)
#___________________________________________________________________________________
# # for count, i in enumerate(phrase):
# #     encrypt_phrase.append(key[count])
    
# # print(encrypt_phrase)

# # key_str = ""
# # for i in key:
# #     key_str += i

# #print(key)
# #nopqrstuvwxyzabcdefghijklm
# # for i in range(len(phrase)):
# #     encrypt_phrase.join(key_str[i])
# # print(encrypt_phrase)