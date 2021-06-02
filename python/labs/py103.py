# def separate_runs():
#     print("****************")
#     print()

# def getGroceries(item1,item2, item3, item4):
#     print(item1)
#     print(item2)
#     print(item3)
#     print(item4)
#     separate_runs()
# getGroceries('cheese', 'eggs','peanut butter', 'coffee')

# def add(num1, num2): # these are parameters
#     return num1 + num2

# result = add(2, 3) # these are arguments
# print(result)

# def make_formal_greeting(name, title):
#     return f" This is {name}, the {title}!"

# result = make_formal_greeting("Dwight","Assistant to the regional manager")
# oops = make_formal_greeting("Assistant to the regional manager", "Dwight")

# print(result)
# print(oops)


# def dance():
#     kind = "jazz"
#     print(f"I am doing a {kind} dance inside function")
#     return f"I am doing a {kind} dance outside function"


# result = dance()
# print(result)



# myList = [ "a", "b", "c","d",]
# #for i in range(len(myList)):
# for i in myList:
#     print(myList[i])

# myFirstDictionary = { key: value}
# CRUD
# names = {
#     "Q":"Atlanta",
#     "Jose": "Atlanta",
#     "Brandon": "Dallas",
#     "Carol": "Atlanta",
#     "Jacob": "Tampa",
#     "Jason": "Nashville",
# }


# items = names.items() # creates a list of tuples. Each tuple has a key, value.
# for key, value in  names.items():
#     # print(key)
#     # print(value)
#     print(f"{key} >> {value}")

# result = names["Jason"]
# result = names.get("Michael")
# result = "Michael" in names # returns True of False
# names["Brandon"] = "Houston"
# del names["Jose"]
#Typically check to see if value is already in dict before adding
# names["Veronica"] = "Houston"
# print(names)
# nameList = names.keys()
# valList = names.values()
# print(valList)

# my_dictionary = {
#     "hello" :   "world",
#     "sqareOfTwo" : 4,
#     "theMeaningOfLife" : 42,
#     0 : 1
# }
# print(my_dictionary["sqareOfTwo"])


contact = [
    {
        'first_name': 'Phillip',
        'last_name': 'Guo',
        'email': 'phillip.guo@gmail.com',
        'phone':{
            'work':'837-494-3948',
            'cell': '234-897-4933'
        }
    },

    {
        'first_name': 'Mark',
        'last_name': 'Guzdial',
        'email': 'mark.guzdial@gatech.edu',
        'phone':{
            'work':'484-569-3466',
            'cell': '493-485-9845'
        }
    }
]

print(contact[0]['phone']['work'])