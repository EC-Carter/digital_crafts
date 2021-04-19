# days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
# print(days[4])

# my_list = ["horse", "dog", "cat", "pot belly pig"]
# my_list_2 = ["goose", "chicken", "cow", "rooster"]

# #print(my_list[1])
# # my_list[1] = "wolf"
# # my_list[3] = "owl"
# #print(my_list[1])
# print(my_list)

# #print(len(my_list))
# my_list.append(my_list_2)
# my_list.extend(my_list_2)
# print(my_list)

# todos = ['pet the cat','water the plants','cook dinner']
# index = 0

# complete = ''
# while True:
#     newTodo = input("Enter a to do item ('stop' to complete): ")
#     if newTodo.lower() == 'stop':
#         break
#     todos.append(newTodo)

# while index < len(todos):
#     print(f"{index}: {todos[index]}")
#     index += 1

# nums = [1, 2, 3, 4, 5]

# new_list = nums[0:3]
# print(new_list)

# arr = [ [1, 2], [3, 4], [4, 5], [7, 8] ]

# print(arr[3][0])

#board = [["x","x","o"],["x","o","x"],["","","o"]]
# board = [ ["X", "X", "O"], ["X", "O", "O"], ["X", "", "O"]]



# print(board)

# greeting = "Hello World"

# alphabet = "abcdefghijklmnopqrstuvwxyz"
# index = 0
# while index < len(alphabet):
#     print(alphabet[index])
#     index += 1

# print(alphabet)

# alph_list = list(alphabet)

# print(alph_list)


# constants = (3.14, 2.71)
# constants[0] = 3 # will throw an error becuse tuples cant be changed
# print(constants[0])



# my_list = list(range(5,35,5))

# print(my_list)

# name = "Carol Carter"

# for i in name:
#     print(i)

# arr = [4, 2, 5, 7, 23, 6, 5]

# #Print the sum of the array.
# sum = 0
# for i in arr:
#     sum += i

# print(sum)   
# print the largest number in list
# arr = [4, 2, 5, 7, 23, 6, 5]
# sum = 0
# for i in arr:
#     if sum < i:
#         sum = i

# print(sum)
# find smallest number
# arr = [4, 2, 5, 7, 23, 6, 5]
# sum = 100
# for i in arr:
#     if sum > i:
#         sum = i

# print(sum)

# arr = [4, 2, 5, 7, 23, 6, 5]
# evens = []
# for i in arr:
#     if i % 2 == 0:
#         evens.append(i)
# print(evens)

# m = 4 
# arr = [4, 2, 5, 7, 23, 6, 5]
# multi = []
# for i in arr:
#    multi.append(i * m)

# print(multi)

# name = "Carol Carter"
# rev_name = ""
# for i in name:
#     rev_name = i + rev_name
#     # if i = name[0]:
#     #     i = name[len(name)]

# print(rev_name)

# num = 
# rev_num = ""

# if num > 0:
#     sign = 1
# else:
#     sign = -1
# num = str(abs(num))
# if len(num) > 1:
#     for i in num:
#         rev_num = i + rev_num
#     rev_num = int(rev_num) * sign
#     print(rev_num)


# for outter in range(1,5):
#     for inner in range(1,3):
#         print(outter, inner)

for outter in range(1,11):
    for inner in range(1,11):
        print(f"{outter} X {inner} = {outter * inner }")
    print("*"*15)    
















