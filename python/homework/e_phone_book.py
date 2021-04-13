# DONE 1 create main menu 
# DONE 2 set entry functionality
# DONE 4 delete entry functionality
# DONE 5 search functionality
# DONE 3 list entry functionality
#6 quit/save
# _______________
#Data structure - dictionary of dictionaries where each entry is a
# dictionary with name, phone number - example { 'name':{'name':'samantha','phone number': 111-1111},{},{},{}}

import pickle
quit = False
book = {}
with open('book.pickle', 'rb') as fh:
    book = pickle.load(fh)


def set_entry():
    global book
    name = input("What is the name?: ")
    number = input("What is the number?: ")
    entry = {}
    entry['name'] = name
    entry['phone number'] = number
    book[name] = entry
    print(f"\nName: {book[name]['name']}\nPhone Number: {book[name]['phone number']}\nEntry stored for {book[name]['name']}. ")

def print_entries():
    if book:
        print("\nHere are your current entries -\n*******************************\n")
        for k, v in book.items():
            print(f"{k}: {v['phone number']}\n")
    else:
        print("\nYou do not have any stored entries.")

def del_entry():
    to_del = input("What entry would you like to delete?: ")
    del book[to_del]
    print(f"{to_del} has been deleted")

def search():
    to_find = input("Who's entry would you like to find: ")
    if to_find in book:
        found = book[to_find]
        print(f"\nHere is {to_find}'s entry!\n{found['name']}: {found['phone number']}")
    else:
        print(f"\nYou do not have an entry for {to_find}.")




# creates main menu
while quit == False:
    userInput = input("""
Electronic Phone Book
*********************
1. Look up an entry 
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)?
""")

    choice = int(userInput)

    if choice == 1:
        search()
    elif choice == 2:
        set_entry()
    elif choice == 3:
        del_entry()
    elif choice == 4:
        print_entries()
    elif choice == 5:
        with open('book.pickle', 'wb') as fh:
            pickle.dump(book, fh)
        quit = True
