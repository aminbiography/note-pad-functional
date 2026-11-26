# Functional Notepad – Text Editor 

A simple browser-based text editor built with HTML, CSS, JavaScript, and Bootstrap. It allows users to enter text and apply basic formatting options through interactive buttons.

## Live Demo

[View Functional Notepad](https://aminbiography.github.io/note-pad-functional/)

## Introduction

Functional Notepad is a beginner-friendly JavaScript project that demonstrates how to build an interactive text editor using DOM manipulation.

The application provides a text area where users can write or paste content and apply different formatting operations, including uppercase, lowercase, bold, italic, text alignment, and capitalization.

JavaScript functions handle the formatting actions by dynamically changing the text area's CSS properties.

## Features

- **Upper Case** – Convert text to uppercase.
- **Lower Case** – Convert text to lowercase.
- **Bold** – Apply bold font styling.
- **Italic** – Apply italic font styling.
- **Left Align** – Align text to the left.
- **Center Align** – Center-align text.
- **Right Align** – Align text to the right.
- **Capitalize** – Capitalize the first letter of each word using CSS text transformation.
- **Clear Text** – Clear the text area and reset its formatting styles.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Bootstrap 4.5.3
- Font Awesome 5
- Document Object Model (DOM)
- JavaScript Functions
- CSS Text Properties

## Repository Structure

```text
note-pad-functional/
├── assets/
│   ├── fnp.css
│   └── fnp.js
├── index.html
└── README.md
```

## How It Works

The application uses JavaScript functions to access the text area through its DOM element ID (`textarea1`).

Each formatting button calls a specific function that updates the corresponding CSS property.

| Function | Operation |
|---|---|
| `f1()` | Uppercase text |
| `f2()` | Lowercase text |
| `f3()` | Bold text |
| `f4()` | Italic text |
| `f5()` | Left alignment |
| `f6()` | Center alignment |
| `f7()` | Right alignment |
| `f8()` | Capitalize text |
| `f9()` | Clear text and reset selected styles |

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/aminbiography/note-pad-functional.git
   ```

2. Navigate to the project directory:

   ```bash
   cd note-pad-functional
   ```

3. Open `index.html` in your web browser.

No additional installation or build tools are required.

## Learning Objectives

- Understand HTML form elements and text areas.
- Practice JavaScript functions.
- Select HTML elements using `document.getElementById()`.
- Manipulate CSS properties through JavaScript.
- Handle button click events.
- Understand DOM manipulation.
- Integrate Bootstrap components and Font Awesome icons.
- Build interactive front-end applications.

## Purpose

This repository is maintained as a practical front-end development learning project. It demonstrates how JavaScript and DOM manipulation can be used to create a functional text editor with simple formatting controls.

## Author

**Mohammad Aminul Islam**

---

#JavaScript #FunctionalNotepad #TextEditor #HTML5 #CSS3 #Bootstrap #VanillaJavaScript #DOMManipulation #JavaScriptProjects #FrontendDevelopment #WebDevelopment #TextFormatting #CodingPractice #LearnJavaScript



