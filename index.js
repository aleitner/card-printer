const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

(async () => {
  // Asynchronously get the names of subdirectories in cards
  const cardGames = await fs.promises.readdir('./cards', { withFileTypes: true })
    .then(entries => entries.filter(entry => !entry.isDirectory()).map(entry => entry.name));

  // Process each card folder
  for (const cardGameFile of cardGames) {

    const cardGame = path.parse(cardGameFile).name  

    // Read the card JSON file
    fs.readFile(`cards/${cardGameFile}`, 'utf-8', (err, data) => {
      if (err) throw err;

      const cards = JSON.parse(data);

      // Check if a matching template folder exists
      if (fs.existsSync(`./templates/${cardGame}`)) {
        const gameTemplatePath = path.join(__dirname, 'templates', 'base_card_template.ejs');

        ejs.renderFile(gameTemplatePath, { cards, gameFolder: cardGame }, (err, html) => {
          if (err) throw err;

          fs.writeFile(`${cardGame}_cards.html`, html, err => {
            if (err) throw err;
            console.log(`${cardGame}_cards.html has been created`);
          });
        });
      } else {
        console.log(`No card template found for the ${cardGame} game.`);
      }
    });
  }
})();