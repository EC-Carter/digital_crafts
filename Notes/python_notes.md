# List comprehension

the syntax for list comprhension is as follows:

```
cubes_by_four = [x ** 3 for x in range(1,11) if ((x ** 3) % 4) == 0]
print cubes_by_four
```
`cubes_by_four = [x ** 3 `
creates the variable and sets x either by itself or with some conition applied to x  
`for x in range(1,11) `
sets up the for loop and establishes some range `if ((x ** 3) % 4) == 0]` sets a condition on what to include in the list.

#### 4/6/21 Python 101 lecture
read more compied vs interpreted 

c and c++,  are base of many other languages - hard to get started with - faster - .exe files
games, missles, nasa use compiled languages

python is built on top of c - built in 90s. Meant to be easy to get started with, didn't have to have computer science degree to understand
also around this time - Java - virtual machine - could run executables no matter what type of machine it was created on.
C# is basically microsofts copy of Java

Go - took best part of c# modified - built by google

command and / comments out code in vs code
command /

conditional statmentspw
decision making
! is called a bang symbol in programming

#### 4/7 Sequences

types of sequences
 - lists
 - tuples
 - xranges

 store multiple values

 CRUD opperations
 create, read, update, delete

lists = mutable = can be changed
tuple = immutable  
len() how many elements in a list
append() adds to the end. single values or arrays if you pass another list it creates multidimensional array
extend() passes another list and merges the two lists. can't be used with single values.
del keyword deletes item (or items) from a list
list slicing grabs a segment of your list without mutating the original list
.insert() inserts a value at the given index. you provide the value as secound arg
.pop() removes from the end of the list
.index() returs index of the value provided
.sort() sorts from smallest to largest - mutates original list
.clear() del values from the list

can also use concatenation operator to combine two lists

#### 4/7 more sequences



list/dictionaries are passed by reference (referenced address of original in memory when copied)
variables are passed by value (New address in memory when copied)
pass by reference vs pass by value 

.copy() method tells interpreter you want a new address for your list or dictionary
gets around the copy by refernce issue

list(string) function converts a string to a list
"you can put delimiter here- specify how you want to join things".join converts list to string

tuple is like a list but is immutable

ranges 
range(start, upto, step)


for loops
for loops in python works as iterators (this is different than other languages- read more on)
