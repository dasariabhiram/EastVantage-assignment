# <div align="center">
 
  <h1 align="center"> User Information App
</h1>
</div>

## <a name="introduction">🤖 Introduction</a>

Welcome to the User Information App! This React application displays user information fetched from the Random User API and allows users to refresh the data.

## <a name="livedemo">Live Demo</a>

https://userapp-eastvantage.netlify.app/

## <a name="tech-stack">⚙️ Technologies Used
</a>

- React
- Axios for API requests
- Local Storage for data persistence
- TailwindCSS

## <a name="tech-stack">⚙️ Project Structure</a>
The project structure follows a simple React application layout:

components: Contains React components, such as Button and UserDisplay.
utils: Includes utility functions or hooks, e.g., useUserData.

# Main Components
 
## UserDisplay
The UserDisplay component is the main component responsible for rendering user information. It utilizes the useUserData hook to fetch and manage user data. The user interface includes a loading state, error handling, and a refresh button.

## Button
The Button component is a simple button component with styling provided by Tailwind CSS. It accepts an onClick function and a label prop for customization.


## <a name="features">🔋 Features</a>

👉 Display user information such as name and email.

👉 Handle loading and error states during data fetching.

👉 Refresh button to update user data.

👉 Data is persisted in local storage for a seamless user experience.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
https://github.com/dasariabhiram/EastVantage-assignment.git
cd EastVantage-assignment
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



