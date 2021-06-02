class AccountHolder:
    def __init__(self, fName, accountType, status, balance):
        self.f_name = fName
        self.account_type = accountType
        self.status = status
        self.balance = balance
    
    def deposit(self):
        ammt = input("How much would you like to deposit?")
        self.balance += float(ammt)
        print(f"Deposit in the amount of {ammt} recieved.\n Your new balance is{self.balance} ")

class Bank:
    def __init__(self, name, address):
        self.name = name 
        self.address = address 
        self.accounts = [] #holds all of our accounts

    def open_new_account(self, fName, accountType, status, balance):
        #create new Account Holder
        account = AccountHolder(fName, accountType, status, balance)
        # store new account inside of self.accounts
        self.accounts.append(account)

    # def show_account_holder(self,fName):
    #     #search for and show account holder
    #     if  in self.accounts:
    #         print(f"{}\n{}\n{}\n{}")
    #     else:
    #         print(f"There is no one named {} in the system")

        
    def show_accounts(self):
        # print all accoutn holders 
        for acc_holder in self.accounts:
            print(f"{acc_holder.f_name}\n{acc_holder.account_type}\n{acc_holder.status}\n{acc_holder.balance}")

    def show_bank_balance(self):
        #show bank balance of entire bank
        total = 0.00
        for acc_holder in self.accounts:
            total += float(acc_holder.balance)
        print(f"The banks total is: {total}")
        
    

bank = Bank("First","111 Main street")
bobby = bank.open_new_account('Bobby','Checking',True, 300.00)
sarah = bank.open_new_account('Sarah','Savings',True, 5000.00)
meg = bank.open_new_account('Meg','Savings',True, 1000.00)
katie = bank.open_new_account('Katie','Checking',True, 2500.98)
bank.show_accounts()
#bank.show_account_holder('Bobby')
bank.show_bank_balance()
bobby.deposit()
