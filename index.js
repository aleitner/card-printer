const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

fs.readFile('cards.json', 'utf-8', async (err, data) => {
  if (err) throw err;

  const games = JSON.parse(data);

  // Asynchronously get the names of subdirectories in templates
  const subdirectories = await fs.promises.readdir('./templates', { withFileTypes: true })
    .then(entries => entries.filter(entry => entry.isDirectory()).map(entry => entry.name));

  // Use Object.keys() to get an array of game names
  Object.keys(games).forEach(gameName => {
    const cards = games[gameName];

    // Find the case-insensitive match for the game template folder
    const matchedFolder = subdirectories.find(folder => folder.toLowerCase() === gameName.toLowerCase());

    if (matchedFolder) {
        const gameTemplatePath = path.join(__dirname, 'templates', 'base_card_template.ejs');
      
        ejs.renderFile(gameTemplatePath, { cards, gameFolder: matchedFolder }, (err, html) => {
          if (err) throw err;
      
          fs.writeFile(`${gameName}_cards.html`, html, err => {
            if (err) throw err;
            console.log(`${gameName}_cards.html has been created`);
          });
        });
      } else {
        console.log(`No card template found for the ${gameName} game.`);
      }
  });
});