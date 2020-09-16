const { items } = require("../dataTest");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;

  purchaseArray.forEach((element) => {
    const [id] = Object.keys(element);
    const [quantity] = Object.values(element);

    items.forEach((element) => {
      if (element._id === Number(id)) {
        if (element.numInStock < quantity) {
          throw new Error("You attemted to buy too many items");
        } else {
          element.numInStock -= quantity;
        }
      }
    });
  });
  res.status(200).send({ status: "success" });
};

module.exports = {
  handlePurchase,
};
