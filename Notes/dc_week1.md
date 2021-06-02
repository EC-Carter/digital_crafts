# week one 
## monday 4/5 General
### TO DO
- figure out why I cant close folders in vs code

- configure what is showing on finder
- installed nmv (Node.js version manager) and Node.js - having issues still need to finish
- finish codecademy python modules 

- installed homebrew amd tldr - learn more later 


requirements to pass

Understand Key Concepts
Meet Attendance Requirements
Approved Resume and Portfolio (turned in and approved)



week 5 and 10 perfomance review and after first unit
PROJECTS OVER THE COURSE
front end 
full stack
individual react
capstone


Homebrew is an installer
 brew install "name of the thing you want to install"

control + backtick toggles between terminal open or closed in VS code

Command line basics
 every computer has a kernel - works with low level hardware
 cpu lives inside of kernel
 shell wraps the kernal
 around the shell is a GUI 
 use shell vs GUI
  - its faster
  - OS hides some capabilities
  - 
  rmdir removes directory
  keyword `code` is the same as using touch (inside VS Code I think)
  you can make multiple directories at once by using one mkdir and passing sevral args
  use * to match remainder of names in command line
  options or flags are always preceeded by a - 


  Version control 
  `git init` starts tracking directory with git 
  ls -la shows if it is a file or folder plus other info
  git log - tells history of what happend in the repo
  git status - shows where files are in the git tracking
  Working directory
  staging directory
  final directory

## Tuesday 4/6 general
 if you do not have mod privlidges on VS code
 chmod 777 * - changes all users to having mod privlidges 
 to get out of vi editor in the terminal(ie forgot closing quote on message during a git commit) escape : q or shift : q

git hub = server running git (same as what we have on our computer) Useful to share files and information since it is remote and hosted online. Everyone can add and take.

git add  staging dir
git commit log dir
git push  remote repo

#### log into github - 
create repository - go on local machiene set up git using git init and then git add git commit git push to to commit items locally FOR THE INITIAL git push copy and paste the lines of code from your create repo page- thereafter you can just use the git push command (since it's already set up)
get remote - v shows you what repository you are connected to (I think)



#### ssh login between github and my computer:
create key on my computer genrerate
go to home directory
ssh-keygen creates a ssh key 
use cat command to see the contents of the public file and copy to where ever you need a public key
provide that key to github give access to authenticate our computer

 digital crafts folder (git repo)
    python
      keep homeworkcd
      lecture notes
      labs

shift option downarrow gets a new line of code in VScode

## 4/9/21
repeating patterns
almost all code is conditional statements
almost evey app is a variation on a "to do" app
zoom in as tiny as you can and start chipping away.

functions
DRY Don't repeat yourself
look for places where you are repatng but don't start out assuming repeating code is bad

common places to use functions include
conversions
keeping track of item (cart)
password stuff (strength, converting)

if you have a function that just returns a value you have to print() the function

every program has a function called main that is where you start.
use while loop when you don't know how many iterations 