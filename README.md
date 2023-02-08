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

### Phone screenshot when code is received:

### Firebase Firestore creating a document when code is created:

### Error handling when user enter a wrong access code:

### When user inputs the correct access code:

### Firebase Firestore sets the code to empty string after code is used:


# Special thanks to Skipli Engineering team for creating this challenge, I learned alot from this**
