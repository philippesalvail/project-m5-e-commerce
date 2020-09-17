const { companies, items } = require("../dataTest");

const handleItemsByCategory = (req, res) => {
  const categoryName = req.params.category.toLowerCase();

  let matchingItemsArray = items.filter(
    (item) => item.category.toLowerCase() === categoryName
  );

  if (matchingItemsArray.length === 0) {
    res.status(400).send({ Error: "No Match Found" });
  }

  //console.log(matchingItemsArray);

  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send(matchingItemsArray);
  }, delay);
};

const handleItemsByCompany = (req, res) => {
  const companyName = req.params.companyId.toLowerCase();
  const company = companies.find((company) => {
    return company.name.toLowerCase() === companyName;
  });

  if (!company) {
    res.status(400).send({ Error: "No Match Found" });
  }

  let matchingItemsArray = items.filter(
    (item) => item.companyId === company._id
  );

  //console.log(matchingItemsArray);
  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send(matchingItemsArray);
  }, delay);
};

const handleAllItems = (req, res) => {
  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send(items);
  }, delay);
};

module.exports = {
  handleItemsByCategory,
  handleItemsByCompany,
  handleAllItems,
};
