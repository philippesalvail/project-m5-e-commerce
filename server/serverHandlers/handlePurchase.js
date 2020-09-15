const { items } = require("../dataTest");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;

  purchaseArray.forEach((element) => {
    const id = Object.keys(element);
    const quantity = Object.values(element);

    // TO DO
  });
};

module.exports = {
  handlePurchase,
};
