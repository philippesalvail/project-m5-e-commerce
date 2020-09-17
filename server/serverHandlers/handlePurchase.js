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
  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send({ status: "Purchase completed" });
  }, delay);
};

module.exports = {
  handlePurchase,
};
