# Task
# Responsive Webpage Project

This project is a responsive webpage built with HTML, CSS, and JavaScript. It includes a fixed navbar, a collapsible left menu, a scalable layout for different screen sizes, and smooth user interactions.

## Features

### General Layout
- Fixed Navbar: Stays at the top while scrolling.
  
- Three Sections:
  - Left Panel: Contains links for search, login, and signup.
  - Center Content: Displays the main content of the page.
  - Right Panel: Includes external links such as LinkedIn, Portfolio, and GitHub.
    
- Footer: Positioned at the bottom with copyright information.

### Functionality
- Responsive Design:
  - Adjusts layout for different screen sizes using CSS flexbox and media queries.
- Collapsible Left Menu:
  - Includes a button to hide the left menu for better usability.
- Dynamic Page Scaling:
  - Adjusts the scaling of the webpage based on screen width using JavaScript.

## Project Structure

```
responsive-webpage/
├── index.html       # Main HTML file
├── style.css        # Stylesheet for the webpage
├── script.js        # JavaScript for interactivity
└── README.md        # Documentation file
```

## Technologies Used
- HTML: Markup structure of the webpage.
- CSS: Styling and layout design.
- JavaScript: Interactivity and dynamic scaling.
- Flaticon: Additional icons.

## How to Use

1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/responsive-webpage.git
   ```

2. Navigate to the Project Directory:
   ```bash
   cd responsive-webpage
   ```

3. Open the `index.html` File:
   Open the file in a browser to view the webpage.

4. Test the Responsive Design:
   Resize the browser window to observe dynamic layout changes and scaling effects.

## Key Features in Detail

### Collapsible Left Menu
The left menu can be toggled on and off using a button. This improves user experience, especially on smaller screens.

### Dynamic Page Scaling
The `script.js` file contains logic to dynamically scale the page based on screen width:
- 50% scaling for screens <= 600px.
- 75% scaling for screens between 600px and 700px.
- 80% scaling for screens between 700px and 767px.
- 90% scaling for screens between 992px and 1600px.
- No scaling for larger screens.

### Fixed Navbar
The navbar remains fixed at the top of the page and ensures easy navigation.

Created with  by Harsha Udhlani.
