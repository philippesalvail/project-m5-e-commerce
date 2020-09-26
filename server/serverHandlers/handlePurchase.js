const { items, orders } = require("../dataTest");
const { v4: uuidv4 } = require("uuid");

const handlePurchase = (req, res) => {
  const purchaseArray = req.body;
  const newOrderId = uuidv4();

  let newOrder = {};

  purchaseArray.forEach((element) => {
    const [id] = Object.keys(element);
    const [quantity] = Object.values(element);

    items.forEach((element) => {
      if (element._id === Number(id)) {
        if (element.numInStock < quantity) {
          throw new Error("You attempted to buy too many items");
        } else {
          element.numInStock -= quantity;
          newOrder[id] = quantity;
        }
      }
    });
  });
  // console.log(newOrderId, newOrder);
  orders[newOrderId] = newOrder;
  console.log(orders);

  const delay = Math.random() * 1250 + 500;
  setTimeout(() => {
    res.status(200).send({ status: "success", orderId: newOrderId });
  }, delay);
};

module.exports = {
  handlePurchase,
};
