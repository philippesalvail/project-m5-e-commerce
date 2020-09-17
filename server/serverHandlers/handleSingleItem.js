const { items, companies } = require("../dataTest");

const handleSingleItem = (req, res) => {
  const selectedItem = req.params.itemId;

  let itemDetails = items.find((item) => {
    return item["_id"] == selectedItem;
  });

  let company = companies.find((comp) => {
    return comp["_id"] == itemDetails["companyId"];
  });

  let itemCategory = itemDetails.category;

  let similarItems = items.filter(
    (item) => item.category == itemCategory && itemDetails.name != item.name
  );

  itemDetails && company && similarItems
    ? res.status(200).send({ itemDetails, company, similarItems })
    : res.status(404).send("Item does not exists");
};

module.exports = {
  handleSingleItem,
};
