
#1 letter summary
# iterate through letters in word
# if letter is not a key in dictionary add it and set its value to 1
# if letter is a key in dictionary increment its value by one
# return histogram dictionary
# histogram = {}
# word = input("What is the word: ")
# word = word.lower()



# for i in word:
#     if i in histogram:
#         histogram[i] += 1
#     else:
#         histogram[i] = 1 
# print(histogram) 

#2 word summary
#same process as above
#except words must be in a list so we can test them as whole units 
word_histogram = {}
phrase = input("What is the phrase?: ")
phrase = phrase.lower()
phrase = phrase.split()


for i in phrase:
    if i in word_histogram:
        word_histogram[i] += 1
    else:
        word_histogram[i] = 1 
#print(word_histogram) 


#3 Sorting a histogram

# take in a dictionary(word_histogram)
# convert values and keys to a list of lists
word_hist_list = []
for k, v in word_histogram.items():
    pair = [k,v]
    word_hist_list.append(pair)

#sort the list
for j in range(len(word_hist_list) -1):
    for i in range(len(word_hist_list) -1):
        if word_hist_list[i][1]  <  word_hist_list[i + 1][1]:
            c = word_hist_list.pop(i)
            word_hist_list.insert(i + 1, c)


# return the largest three
top_three = word_hist_list[0:3]
print("The top three words in the phase are - ")
for i in top_three:
    print(f"{[i][0][0]} : {[i][0][1]} ")
   