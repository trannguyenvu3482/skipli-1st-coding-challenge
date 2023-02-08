# Skipli 1st Coding Challenge - Vu Tran

## About the project:
### Client:
- Technologies: ReactJS, Material UI and React Toastify for UI, Axios for fetching
### Server:
- Technologies: NodeJS, Express, Firebase Firestore as main database
- Notes:
  + A Twilio private key is needed and a Firebase Service Account is needed so it may not work when running this project, I have left an example.env file as example for some env variables being used in my project
## How to run:
### Client (Server default port is 3000):
- Go into the client folder:
```cmd
cd .\client\
```

- Install all the dependencies:
```cmd
npm install
```

- Run the client server:
```cmd
npm start
```

### Server (Server default port is 3001):
- Go into the server folder:
```cmd
cd .\server\
```

- Install all the dependencies:
```cmd
npm install
```

- Run the server:
```cmd
npm start
```

## Screenshots:
### Client view:
![image](https://user-images.githubusercontent.com/87817412/217461501-4d6ab4db-ba60-4369-ae0e-fff33b813ca3.png)

### When user not filling all the fields needed:
![image](https://user-images.githubusercontent.com/87817412/217461743-0fb221c8-e8db-4503-8b34-8f96dd145be2.png)
![image](https://user-images.githubusercontent.com/87817412/217461790-a74a0117-89a5-425c-aaf7-4e7dfdf2cae8.png)

### Error handling when user enter an unvalid phone number:
![image](https://user-images.githubusercontent.com/87817412/217461952-b35c99d8-315f-44c0-9dfa-98c26933d793.png)

### When user enter a valid phone number and the text is sent:
![image](https://user-images.githubusercontent.com/87817412/217534287-8aab41cf-2b6a-4a91-80e8-a2833bba8475.png)

### Phone screenshot when code is received:
![image](https://user-images.githubusercontent.com/87817412/217533763-f0c47801-7b0b-4fe5-9370-28e95597a52d.png)

### Firebase Firestore creating a document when code is created:
![image](https://user-images.githubusercontent.com/87817412/217533723-f91b2de6-cfba-4d00-87c6-188c6c9ad4ef.png)

### Error handling when user enter a wrong access code:
![image](https://user-images.githubusercontent.com/87817412/217533921-50c9a80b-8a99-454d-bcd3-a401aef7083d.png)

### When user inputs the correct access code:
![image](https://user-images.githubusercontent.com/87817412/217534547-2ed83106-a364-46da-a948-021c5f3d5ada.png)

### Firebase Firestore sets the code to empty string after code is used:
![image](https://user-images.githubusercontent.com/87817412/217534588-76e97515-4e4d-48a5-849d-fe8edcc8e030.png)


## Special thanks to Skipli Engineering team for creating this challenge, I learned alot from this
