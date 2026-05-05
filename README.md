# Odin Library

This project is included in The Odin Project (TOP) curriculum. The objective is to build a small library app that lets users add, view, update, and remove books using HTML, CSS, and vanilla JavaScript, with a focus on DOM manipulation and basic data modeling.

## Project Overview

A simple, responsive library interface with a modal form for adding books. Each book is rendered as a card with metadata and action buttons. The project emphasizes clean UI structure, event handling, and state-driven rendering.

This project strengthened my comprehension of:

- Modeling data with JavaScript constructors and prototypes
- DOM creation and re-rendering from an in-memory array
- Handling events for form submission and button actions
- Using the native HTML dialog element for modal flows
- Styling a card-based layout with CSS Grid

## Features

- Header with title and call-to-action button
- Modal form to add new books (title, author, pages, read status)
- Book cards with title, author, page count, and read status
- Toggle read status per book
- Remove book from the library
- Basic focus styling for form inputs

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

```text
odin-library/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## What I Learned

While working on this project, I gained experience in:

- Building reusable UI updates by re-rendering from state
- Using `data-*` attributes to connect UI elements with data
- Creating a modal form flow with `dialog.showModal()`
- Managing form reset and close behavior cleanly
- Designing a simple, readable UI with CSS Grid and Flexbox

## Future Improvements

Possible improvements for this project include:

- Persisting the library to localStorage
- Adding form validation with clearer error messages
- Allowing book editing without removal
- Improving accessibility (a11y) for dialog focus trapping
- Adding filters and search for larger collections

## Acknowledgements

This project was completed as part of the learning path provided by The Odin Project (TOP).
