# Calculator Application

This is a simple calculator application built using React and TailwindCSS. The calculator features three different themes, allowing users to switch between them for a personalized experience.

## Features

-   **Basic Calculator Functions**: Perform basic arithmetic operations like addition, subtraction, multiplication, and division.
-   **Three Themes**: Easily switch between three different themes to change the look and feel of the calculator.
-   **Responsive Design**: The application is designed to be responsive, ensuring a great user experience on both desktop and mobile devices.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **TailwindCSS**: A utility-first CSS framework for rapid UI development.
-   **Vite**: A build tool that significantly improves the frontend development experience.

## Installation and Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Linnuxz/calculator-react
    ```

2. **Navigate to the project directory**:

    ```bash
    cd calculator-react
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```


## Usage

-   **Switch Themes**: Use the theme toggle to switch between three different themes.
-   **Perform Calculations**: Click the buttons to enter numbers and perform calculations. Use the "DEL" button to delete the last entry and the "RESET" button to clear the screen.
-   **Equal Button**: Click the "=" button to compute the result of the entered expression.

## Project Structure

-   `src/components`: Contains the React components used in the application.
    -   `TripleToggle.jsx`: Component for switching between themes.
    -   `Calculator.jsx`: Main calculator component.
-   `src/constants/index.js`: Contains the theme configurations and button definitions.
-   `src/App.jsx`: Main application component that ties everything together.

## Customizing Themes

To customize or add new themes, modify the `index.js` file. Each theme configuration includes properties for background colors, text colors, and box shadows.

## Acknowledgments

-   React: [React Documentation](https://reactjs.org/docs/getting-started.html)
-   TailwindCSS: [TailwindCSS Documentation](https://tailwindcss.com/docs)
-   Vite: [Vite Documentation](https://vitejs.dev/guide/)

Enjoy using the calculator application! If you encounter any issues or have questions, please don't hesitate to reach out.
