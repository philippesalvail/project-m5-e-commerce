const { items } = require("../dataTest");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;

  purchaseArray.forEach((element) => {
    const id = Object.keys(element);
    const quantity = Object.values(element);
    console.log("id", id);
    console.log("quantity", quantity);

    // TO DO
    res.status(200).send(purchaseArray);
  });
};

module.exports = {
  handlePurchase,
};
