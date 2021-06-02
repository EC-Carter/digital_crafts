#DIRs
#Functional programing way
# def greeting(name):
#     print(f'hello {name}!')

# chris = {
#     'firstName': 'Chris',
#     'lastName': 'Owens',
#     'greeting': greeting
# }

# matt = {
#     'firstName': 'Matt',
#     'lastName': 'Fischer',
#     'greeting': greeting
# }

# print(chris['firstName'], chris['lastName'])

# chris['greeting']('veronica')

#same thing with OOP

#classes are templates, placeholder for what we are going to do. When you make an object you use the template and fill it with info.
# class DIR:
#     # method inside of my class,
#     #constructor is a special type of method
#     def __init__(self,fname,lname): 
#         self.firstName = fname
#         self.lastName = lname

#     def greeting(self, name): 
#         # self refrences the memory address for each instance created. Is always the first parameter for methods.
#         print(f'{self.firstName} says hello {name}')

# chris = DIR('Chris','Owens')
# matt = DIR('Matt','Fisher')

# chris.greeting('matt')
# matt.greeting('chris')

# class Person: 

#     def __init__(self, name, email, phone):
#         self.name = name
#         self.email = email
#         self.phone = phone
#     #global function
#     @classmethod
#     def method(cls)
#         pass

# #     def greet(self, other_person):
# #         print('Hello {}, I am {}!'.format(other_person.name, self.name))


# # sonny = Person('Sonny','sonny@hotmail.com', '483-485-4948')
# # jordan = Person('Jordan', 'jordan@aol.com','495-586-3456')

# # sonny.greet(jordan)
# # jordan.greet(sonny)
# # print(f"Sonny\nemail: {sonny.email}\nphone : {sonny.phone}")
# # print(f"Jordan\nemail: {jordan.email}\nphone : {jordan.phone}")



# class CrazyString(str):
#     def __init__(self, word):
#         self.word = word
#     def reverse(self):
#         revString = ''
#         for char in self.word:
#             revString = char + revString
#         return revString

# kanye = CrazyString('west')

# print(kanye.reverse())

class Car:
    def __init__(self,make,model,color):
        self.make = make
        self.model = model
        self.color = color
    
    def carDetails(self):
        print(f"{self.make} {self.model} {self.color}")

class Hybrid(Car):

    def __init__(self,typeOfcar,make,model,color):
        self.typeOfcar = typeOfcar
        super().__init__(make,model,car)#when child class has it's own init you must use this so that the parent can initialize itself.
        # You must modify the init method in the child and then when you create an instance of the class you must pass values for both inits 


    def carType(self):
        print("I am a hybrid car")

    def carDetails(self):
        print("I'm inside the hybrid class")
        super().carDetails() #calls the origianal method in the cars class
        print("after the hybrid class")




class Electric(Car):


    def carType(self):
        print("I'm  an electric car")

# #implicit inheritance 
# car = Car("honda", "civic", "silver")
# car.carDetails()
# hybrid = Hybrid("hybrid","toyota","prius","green")# must pass in the items the parent class requires, what the car constructior expects
# electric = Electric("nissan","leaf","blue")
# electric.carDetails()

# hybrid.carDetails() # override Explicitly carDetails method



# rpg game part 1
class Character:
    def __init__(self):
        pass

    def alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def attack(self,attacked):
        if attacked.type == "zombie":
            attacked.health = attacked.health
        else:
            attacked.health -= self.power 
            print(f"{self.name} does {self.power} damage to {attacked.name}.")
            if attacked.health <= 0:
                print(f"{attacked.name} is dead.")

    def print_status(self):
        print(f"{self.name} has {self.health} health and {self.power} power.")

class Hero(Character):
    def __init__(self, name):
        self.health = 10
        self.power = 5
        self.name = name
        self.type = "hero"

class Goblin(Character):
    def __init__(self, name):
        self.health = 6
        self.power = 2
        self.name = name
        self.type = "goblin"

class Zombie(Character):
    def __init__(self, name):
        self.health = 1
        self.power = 4
        self.name = name
        self.type = "zombie"

    def alive(self):
        return True
        

emmit = Hero("emmit")
hyacinth = Goblin("hyacinth")
richard = Zombie("richard")

def main():
    # if playing with the goblin
    #while hyacinth.alive() and emmit.alive():

    #if playing with the zombie
    while emmit.alive() and richard.alive():
        emmit.print_status()
        #hyacinth.print_status()
        richard.print_status()
        print()
        print("What do you want to do?")
        print("1. fight zombie")
        print("2. do nothing")
        print("3. flee")
        print("> ", end=' ')
        choice = input()
        if choice == "1":
            emmit.attack(richard)  
        elif choice == "2":
            pass
        elif choice == "3":
            print("Run, run, run....")
            break
        else:
            print("Invalid input {}".format(raw_input))

        if richard.health > 0:
            richard.attack(emmit)
main()
