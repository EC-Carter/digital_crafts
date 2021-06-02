# #creating a class called Student()
# class Student:
#     #using the python constructor
#     def __init__(self, name):
#         self.student_name = name
        
#     # a method of the student class
#     def greeting(self,name):
#         print(f'{self.student_name} Says, Good Morning {name}!')


# # creating instances of the Student() class
# carol = Student('carol') 
# victoria = Student('victoria')
# q = Student('q')
# jennifer = Student('jennifer')
# rio = Student('rio')

# #calling the greeting method on each instance
# carol.greeting('victoria')
# victoria.greeting('q')
# q.greeting('jennifer')
# jennifer.greeting('rio')
# rio.greeting('carol')

# example of composition
class Campus:
    def __init__(self):
        self.students = [] # [student, studet, stud]
    def addStudent(self, firstName, campus):
        student = Student(firstName, campus)
        self.students.append(student)
    def showCurrentStudents(self):
        for studentObj in self.students:
            print(f"{studentObj.firstName} {studentObj.campus}")
            
campus = Campus()
campus.addStudent('Giselle','Las Vegas')
campus.addStudent('Carol', 'Atlanta')
campus.addStudent("Jacob", "Tampa")
campus.addStudent("Victoria", "Houston")
campus.addStudent("Brandon", "Dallas")
campus.addStudent("Dot", "Auburn")
campus.showCurrentStudents()