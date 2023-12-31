# Med-Vault
## Decentralized Electronic Medical Record

## Team Members
- Dhruv Verma
- Abhinav Kumar
- Hriday Ahuja

## Getting Started
### Step 1: Install The Required Softwares
- Install Ganache from the following link [https://trufflesuite.com/ganache/]
- Install Metamask browser extension [https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn]
- Download and Install ___Python___ 3.7+ from [here](https://www.python.org/downloads/)  
- Download and Install Node from [here](https://nodejs.org/en/download). It will also install ___node package manager___

### Step 2: Clone the repository and cd into the project directory
- Input the subsequent instructions within the command terminal
  
  ```
  git clone https://github.com/AbhiSinha08/med-vault
  ```
  ```
  cd med-vault
  ```

### Step 2: Setting up Local Blockhain network
- Open Ganache and click on 'Quick Setup'
- Change network on Metamask and import accounts from Ganache
- Compile and deploy the smart contract with truffle
- Input the subsequent instructions within the command terminal

  ```
  npm install -g truffle
  ```
  ```
  cd truffle
  ```
  ```
  truffle compile
  ```
  ```
  truffle deploy
  ```
### Step 3: Executing the frontend
- Input the subsequent instructions within the command terminal
  
  ```
  cd ../client
  ```
  ```
  npm install
  ```
  ```
  npm start
  ```
By default,  the client runs on port `3000` on `localhost`.  
Head over to your local host or paste this URL in your browser http://localhost:3000 to test it out.

## Brain MRI Segmentation Model
We've developed a model that's designed to perform segmentation on brain MRI images. This means that it's capable of identifying and highlighting specific regions of interest within these images. The architecture we chose for this task is called U-Net, which is the ideal choice for medical image segmentation tasks. When you provide an MRI image as input, the U-Net model processes it through a series of layers that progressively learn to recognize different features within the image. 

### Input Image to the Model
![Output image](https://github.com/AbhiSinha08/med-vault/blob/main/TCGA_CS_4941_19960909_14.png)

### Output Masked Image
![Output image](https://github.com/AbhiSinha08/med-vault/blob/main/TCGA_CS_4941_19960909_14_mask.png)

Once the model processes the input image, it generates an output mask that highlights the segmented regions. The output mask assigns a value to each pixel, indicating its class or category. This way, you can clearly see which parts of the brain the model has identified as belonging to the region of interest.
- Binary Accuracy: 0.9108
- Intersection Over Union: 0.0492
- dice Coefficients: 0.0897

### Accuracy Graph for the Segmentation Model
![Output image](https://github.com/AbhiSinha08/med-vault/blob/main/Accuracy%20Graph.png)

The U-Net architecture has proven to be quite effective for tasks like medical image segmentation, where precise identification of specific structures is crucial. It's capable of producing accurate segmentation results, which can be extremely valuable for medical professionals in diagnosing and treating various brain conditions. In a nutshell, my brain MRI Segmentation model based on the U-Net architecture takes MRI images as input, processes them through a specialized neural network, and produces a masked output that highlights the segmented regions of interest within the brain images.
  
