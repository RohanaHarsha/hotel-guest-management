



///////////////////////////////////////////////
pocketbase exe cannot be in the same folder as in the pocketbaseapi because it confusus the runtime and give resolver error

# Hotel Guest Management App

A modern, responsive web application for managing hotel guests. Built with **React**, **Tailwind CSS**, **React Router**, and **PocketBase** as the backend.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation & Setup](#installation--setup)  


---

## Project Overview

This app provides a streamlined interface to manage hotel guests, including registration, listing, editing, and deleting guest records. It emphasizes **clean UI**, **smooth interactions**, and **easy data management** through PocketBase.

---

## Features

- **Guest Registration**: Add new guest details, including name, email, and date of birth.
- **Guest List**: View all registered guests in a searchable, sortable table.
- **Edit Guest**: Update guest details via a dedicated edit page.
- **Delete Guest**: Remove guests from the system with a confirmation step.
- **Tailwind Styling**: Clean, modern design with custom cards, buttons, forms, and alerts.
- **PocketBase Integration**: Stores guest data securely in PocketBase collections.


## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS  
- **Routing**: React Router DOM  
- **Backend**: PocketBase  
- **Build Tool**: Vite  
- **Version Control**: Git  



## Project Structure
├─ hotel-guest-management
    ├─ client/
    │ ├─ src/
    │ │ ├─ components/
    │ │ ├─ pages/
    │ │ │ 
    │ │ │ ├─ GuestList.tsx
    │ │ │ ├─ GuestEdit.tsx 
    │ │ │ └─ GuestRegistration.tsx 
    │ │ ├─ styles/ # CSS / Tailwind overrides
    | | ├─ app.tsx 
    │ │ └─ main.tsx # App entry point
    │ └─ package.json
    ├─ pocketbase/ # PocketBase server & collections
    └─ README.md

## installation


**Split the terminal to run procketbase as well**

**1st terminal**

*current directory*

- cd client

 -npm install
 -create vite@latest choose react and typescript
 -react-router-dom
 -npm install pocketbase
 -npm install npm install tailwindcss @tailwindcss/vite then copy the plugin  tailwindcss() to the vite.configuration.ts and 
 -import import tailwindcss from '@tailwindcss/vite' to the file


 *after installing dependancies run*

 -npm run dev

 *2nd terminal*

-cd server/pocketbase_setup
- ./pocketbase serve




