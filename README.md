# Safe Notes

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Used For](#used-for)
- [Improvements](#improvements)
- [Problems Faced](#problems-faced)
- [Links](#links)
- [Getting Started](#getting-started)

---

## Introduction

Safe Notes is a secure note-taking application built using React and CSS. It provides users with a safe way to store notes, links, and passwords. The application features data encryption, and all data is stored locally on the user's device. A passkey is used to secure and unlock the application.

## Demo



https://github.com/yashksaini/Safe-Notes/assets/101442489/6bf8c0a1-8eef-41a4-a5fb-c34b7b253351



## About the Project

Safe Notes is designed to be a versatile and secure note-taking application. It consists of three main sections:

1. **Notes**: Users can create, edit, and delete notes with titles and descriptions. The notes are searchable, allowing users to find specific information quickly.
2. **Links**: Users can store and manage useful links, providing easy access to frequently used websites. The links are also searchable by title.
3. **Passwords**: Users can securely store passwords for future reference. All password data is encrypted before being stored in the indexed DB.

To enhance security, a 4-digit passkey is used to lock and unlock the application. Data is encrypted while stored in the indexed DB, ensuring the safety of sensitive information.

## Technologies Used

- React
- CSS
- Indexed DB
- LocalStorage
- Encryption
- Decryption

## Features

- Create, edit, and delete notes with titles and descriptions
- Search functionality for notes and links
- Securely store and manage useful links
- Store and manage passwords in an encrypted form
- Use a 4-digit passkey for application locking and unlocking
- Data encryption for stored passwords
- Indexed DB for storing notes, links, and passwords
- Intuitive and user-friendly interface
- Quick and easy access to stored information
- Offline functionality for accessing saved data
- Passkey-based security for unauthorized access prevention
- Responsive design for various screen sizes
- Local data storage for enhanced privacy
- User-friendly interface for easy navigation
- Clear visual feedback for passkey entry and validation
- Progressive Web Application that is stored on the smartphone

## Used For

- Secure note-taking
- Managing useful links
- Storing passwords securely

## Improvements

- Add the ability to categorize notes and links
- Implement cloud synchronization for data backup
- Include a password generator for creating strong passwords
- Enhance accessibility features for a wider audience

## Problems Faced

- Implementing data encryption for passwords
  - Solution: Utilized encryption algorithms to securely store passwords in the indexed DB.
- Designing a user-friendly and responsive interface
  - Solution: Used CSS and responsive design principles to create an intuitive and visually appealing UI.
- Implementing passkey-based security and data locking
  - Solution: Created a passkey system and integrated it with application locking and unlocking mechanisms.

## Links

- Live URL: [Safe Notes](https://safe-notes.netlify.app/)
- GitHub Repository: [Safe Notes GitHub](https://github.com/yashksaini/Safe-Notes)

## Getting Started

To run Safe Notes locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yashksaini/Safe-Notes.git`
2. Navigate to the project directory: `cd Safe-Notes`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000`
