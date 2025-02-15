# Form Submission and Summary Project

## Description
This project consists of a web application with two main pages:

1. **Home Page**: Contains a logo, a welcome message, and a "Start" button.
2. **Form Page**: Displays the same logo and a form with five fields.
3. **Summary Page**: When the form is submitted with valid data, the home page will show a summary instead of the welcome message.

## Implemented Features
- Modern and well-presented design with applied styles.
- Smooth navigation between pages using links and buttons.
- A loading effect before deciding what content to display on the home page.
- Dynamic form validations (at least two validations per field).
- Automatic redirection after form submission.
- The logo functions as a link to the home page when on the form page or after submitting data.
- Implemented using **HTML, CSS, Vanilla JavaScript, and TypeScript**.

## Project Structure
```
/alpha-test
│── index.html         # Home page
│── inscription.html   # Form page
│── assets/
│   ├── imgs/
│   │   ├── logo.jpg   # Project logo
    │── scripts/
    │   ├── check-register.js  # Validation logic
    │   ├── form.js            # Form interactions
    │   ├── screen-loader.js   # Loading effect logic
    │   ├── validations.js     # Input validation rules
    │── styles/
    │   ├── styles.css     # CSS styles
│── .gitignore         # Git ignore file
│── README.md          # Project documentation
```

## Installation and Usage
1. Clone the repository or unzip the `.zip` file.
2. Open `index.html` in a web browser.
3. Click "Start" to access the form page.
4. Fill out the form with valid data and submit it.
5. The home page will display the summary of the entered data.


## Validation Logic
The project includes dynamic validation functions to ensure that user input meets specific criteria. Below are the implemented validation functions:

- **validateName(name, input)**: Ensures that the name has between 2 and 50 characters.
- **validateNickname(nickname, input)**: Ensures that the nickname has between 2 and 20 characters.
- **validateEmail(email, input)**: Uses a regex pattern to validate the email format.
- **validateSelection(value, input)**: Ensures that a selection is made in dropdown fields.
- **validateTerms(checked, input)**: Ensures that the user has accepted the terms and conditions.

Each validation function uses `showError(input, message)` to display an error message when the input is invalid and `clearError(input)` to remove the error message when the input is corrected.

## Design and Production Links
- **Figma Design**: [Alpha Test JS](https://www.figma.com/design/03TEdCRfW3b09hYHdVgE84/Alpha-Test-Js?node-id=9-401&t=t4MPZunRqnzK6YzE-0)
- **Live Demo**: [Alpha Test Production](https://alpha-test.pages.dev/)

## Notes
- If the data does not meet the validations, the form will not be submitted, and error messages will be displayed.
- The home page will only display the summary if the data is valid and matches the form submission.
- Recommended to test on modern browsers for better compatibility.

## Author
**José Jean Piere Rodriguez Mejía**