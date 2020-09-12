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

  res.status(200).send(matchingItemsArray);
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

  res.status(200).send(matchingItemsArray);
};

const handleAllItems = (req, res) => {
  res.status(200).send(items);
};

module.exports = {
  handleItemsByCategory,
  handleItemsByCompany,
  handleAllItems,
};
