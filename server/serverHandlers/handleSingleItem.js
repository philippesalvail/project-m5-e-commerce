const { items, companies } = require("../dataTest");

const handleSingleItem = (req, res) => {
  const selectedItem = req.params.itemId;

  let itemDetails = items.find((item) => {
    return item["_id"] == selectedItem;
  });

  let company = companies.find((comp) => {
    return comp["_id"] == itemDetails["companyId"];
  });

  itemDetails && company
    ? res.status(200).send({ itemDetails, company })
    : res.status(404).send("Item does not exists");
};

module.exports = {
  handleSingleItem,
};
