const { companies, items } = require("../dataTest");

const handleSearchItems = (req, res) => {
  const searchInput = req.params.input.toLowerCase();

  if (!searchInput) {
    res.status(400).send({ Error: "bad request" });
    return;
  }

  let matchingItemsArray = [];

  items.forEach((item) => {
    if (item.name.toLowerCase().includes(searchInput)) {
      matchingItemsArray.push(item);
    }
  });

  if (matchingItemsArray.length === 0) {
    res.status(200).send({ Error: "No Match Found" });
    return;
  }

  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send(matchingItemsArray);
  }, delay);
};

module.exports = {
  handleSearchItems,
};
