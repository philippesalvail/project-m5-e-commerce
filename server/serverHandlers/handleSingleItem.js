const { items, companies } = require("../dataTest");

const handleSingleItem = (req, res) => {
  const selectedItem = req.params.itemId;

  let itemDetails = items.find((item) => {
    return item["_id"] == selectedItem;
  });

  let company = companies.find((comp) => {
    return comp["_id"] == itemDetails["companyId"];
  });

  let pricePoint = parseFloat(itemDetails.price.substring(1));
  let itemCategory = itemDetails.category;

  let cheaperItems = items.filter(
    (item) =>
      parseFloat(item.price.substring(1)) <= pricePoint &&
      item.category == itemCategory &&
      itemDetails.name != item.name
  );

  itemDetails && company
    ? res.status(200).send({ itemDetails, company, cheaperItems })
    : res.status(404).send("Item does not exists");
};

module.exports = {
  handleSingleItem,
};
