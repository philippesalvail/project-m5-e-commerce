const { items } = require("../dataTest");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;

  purchaseArray.forEach((element) => {
    const [id] = Object.keys(element);
    const [quantity] = Object.values(element);

    items.forEach((element) => {
      if (element._id === Number(id)) {
        if (element.numInStock < quantity) {
          throw new Error("You attempted to buy too many items");
        } else {
          element.numInStock -= quantity;
        }
      }
    });
  });
  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send({ status: "success" });
  }, delay);
};

module.exports = {
  handlePurchase,
};
