# CRUD - Create, Read, Update, Delete
todoList = []
done = 'n'

def add():
    newTodo = input("Enter a new to do item")
    todoList.append (newTodo)

def display():
    for count, i in enumerate(todoList):
        print(f"{count + 1 } {todoList[count]}")

def update():
    number = input("which item would you like to update?: ")
    number = int(number)
    updatedValue = input("which item would you like the update to say?: ")
    todoList[number -1] = updatedValue

def delete():
    delete = input("what number do you want to delete?: ")
    delete = int(delete)
    del todoList[delete -1]



while done == 'n':
    # main menu
    print('what would you lilke to do?')
    userInput = input(f""" 
    1 for listing To do list
    2 for adding a To do
    3 for delete a To do item
    4 update a To do item
    5 end
    """)
    choice = int(userInput)

    if choice == 1:
        display()
    elif choice == 2:
        add()
    elif choice == 3:
        delete()
    elif choice == 4:
        update()
    elif choice == 5:
        done = "y"
    





