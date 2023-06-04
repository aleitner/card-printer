# Card Printing Utility

A simple and customizable card printing utility that allows users to generate and print cards from a JSON file, using EJS templates and JavaScript. I mostly just made this to print test cards out for whatever card game I want to make.

## Features

- Load cards from a JSON file
- Customizable card templates for different card types
- Adjust the number of card copies
- Optimized print layout for cards

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project folder on your computer.
3. Add or modify your cards in the cards.json file.
4. Generate an `.html` file for you cards.json with `node index.js`.
5. Open the `[[card-game-name]].html` file in your preferred web browser to view and interact with the card printing utility.

## Customize

- To add or modify card types, create or update EJS templates in the `./templates/{gameFolder}` directory.
- To change the source of cards, update the `cards.json` file.
- To modify styles and general layout, make adjustments to the `styles.css` file, and corresponding EJS templates.

## Upcoming Features

- Card scaling to print cards in different sizes
- Live print preview updating when card quantities are changed
- Customizable card content like text, images, and colors
- Saving and loading card configurations for future use
- Responsive design for mobile devices

## License

This project is open source and available under the [MIT](https://choosealicense.com/licenses/mit/) license.