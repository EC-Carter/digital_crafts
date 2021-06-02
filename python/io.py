# file_handler = open('preamble.txt','r') # ojbect is created with the contents

# contents = file_handler.read() # reads the contents of the file

# file_handler.close() # if this is forgotten it can create a memory leak and cause crashes

# print(contents)

# w write - replaces contents of file if it exists. r read a append - adds to the end of file if file already exists.
# wb write binary rb - read binary

# file_handler = open('newFile.txt','a') # ojbect is created with the contents

# contents = file_handler.write('\n\nmy name is carol') # reads the contents of the file

# file_handler.close() # if this is forgotten it can create a memory leak and cause crashes

# with open('dwight.txt','w') as file_handler: # you don't have to use the close command with this syntax, 
#     # it is built in with statement is a context handler
#     #contents = file_handler.read()
#     file_handler.write('Bears, beets, battlestar galactica')
#     #print(contents)

# import pickle # allows us to save data as a dictionary

# # students = {
# #     'Giselle' : 'Las Vegas',
# #     'Lane' : 'Atlanta',
# #     'Victoria' : 'Humble'
# # }

# # with open('data.pickle', 'wb') as fh:
# #     pickle.dump(students, fh)

# with open('data.pickle', 'rb') as fh:
#     students2 = pickle.load(fh)

# print(students2['Giselle'])