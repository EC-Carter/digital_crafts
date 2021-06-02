import json

#file_handler = open('data.json', 'r')
#memory leak can happen if you forget to close
#To guard againts memory leak 

with open('data.json', 'r') as file_handler:
    data = json.load(file_handler) # converts json data to dictionary

#  data = {'data':[{},{},{},{},{}] }
print(data['data'][0]) # gets info for first state

totalCases = 0
for obj in data['data']:
    print(f"""{obj['state']}
    cases: {obj['cases']}
    deathes: {obj['deaths']}
    """)
    totalCases += int(obj['cases'])

print (f"total cases: {totalCases}")

