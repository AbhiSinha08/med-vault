# Med-Vault
## Decentralized Electronic Medical Record

## Team Members
- Dhruv Verma
- Abhinav Kumar
- Hriday MC Ahuja

# Getting Started
### Step 0: Install Required Softwares
- Install Ganache from (here)[https://trufflesuite.com/ganache/]
- Install (Metamask browser extension)[https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn]
- Download & Install ___Python___ 3.7+ from [here](https://www.python.org/downloads/)  
- Download & Install Node from [here](https://nodejs.org/en/download). It will also install ___node package manager___

### Step 1: Clone the repository and cd into the project directory
```
$ git clone https://github.com/AbhiSinha08/med-vault
$ cd med-vault
```

### Step 2: Set up Local Blockhain network
- Open Ganache and click on 'Quick Setup'
- Change network on Metamask and import accounts from Ganache
- Compile and deploy the smart contract with truffle
  ```
  $ npm install -g truffle
  $ cd truffle
  $ truffle compile
  $ truffle deploy
  ```
### Step 3: Run the frontend
```
$ cd ../client
$ npm install
$ npm start
```
By default,  the client runs on port `3000` on `localhost`.  
So head over to http://localhost:3000 to test it out.
  
