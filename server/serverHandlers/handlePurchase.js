const { items } = require("../dataTest");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;
  console.log("purchase array", purchaseArray);

  purchaseArray.forEach((element) => {
    const [id] = Object.keys(element);
    const [quantity] = Object.values(element);
    console.log("qty", quantity);
    console.log("id", id);

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
  res.status(200).send({ status: "Purchase completed" });
};

module.exports = {
  handlePurchase,
};
