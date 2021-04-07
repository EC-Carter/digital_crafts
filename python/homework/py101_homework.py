# # 1. and 2. Tip Calculator
# total = float(input("how much was the bill?: " ))
# service = input("How was the service today? (choose:good/bad/fair): ")
# service = service.lower()
# people = float(input("Split how many ways?: "))

# if service == "good":
#     tip = .2
# elif service == "fair":
#     tip = .15
# else :
#     tip = .10

# tip_amount = total * tip
# total_bill = tip_amount + total
# per_person = total_bill/ people 

# tip_amount_f = "${:.2f}".format(tip_amount)
# total_bill_f = "${:.2f}".format(total_bill)
# per_person_f = "${:.2f}".format(per_person)



# print(f"Tip amount: {tip_amount_f}")
# print(f"Total amount: {total_bill_f}")
# print(f"Amount per person: {per_person_f}")

#####################################
# 3. How many coins?
# print("You have 0 coins")
# counter = 0
# while counter < 100:
#     answer =input("Would you like another?: ")
#     answer = answer.lower() 
#     if answer == "yes":
#         counter += 1
#         print(f"you have {counter} coins")
#     else:
#         print("Bye!")
#         break

###################################
# 4. Print a box

# user_wide = int(input("How many wide?: "))
# user_tall = int(input("How many tall?: "))
# a = "*"
# x = " "

# print (a*(user_wide))
# counter = 0
# while (counter < user_tall -2):
#     print(a,x*(user_wide-4),a)
#     counter+= 1
# print (a*(user_wide))

#################################
# 5. Print a Triangle
# for x in range(1,8,2):
#     print(("*"* x).center(7))


#################################
# 6. Multiplication Table
# one = 1
# two = 2
# three = 3
# four = 4
# five  = 5
# six = 6
# seven = 7
# eight = 8
# nine = 9
# ten = 10

# counter = 1

# while counter < 11:
#     print(f"{counter} x {one} = {counter * one}")
#     print(f"{counter} x {two} = {counter * two}")
#     print(f"{counter} x {three} = {counter * three}")
#     print(f"{counter} x {four} = {counter * four}")
#     print(f"{counter} x {five} = {counter * five}")
#     print(f"{counter} x {six} = {counter * six}")
#     print(f"{counter} x {seven} = {counter * seven}")
#     print(f"{counter} x {eight} = {counter * eight}")
#     print(f"{counter} x {nine} = {counter * nine}")
#     print(f"{counter} x {ten} = {counter * ten}")
#     print ("*" * 15)
#     counter += 1







