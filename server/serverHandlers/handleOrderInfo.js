const { orders } = require("../dataTest");

const handleOrderInfo = (req, res) => {
  const orderId = req.params.orderId;

  console.log("handleOrderInfo", orderId);

  matchedOrder = orders[orderId];

  console.log("matchedOrder:", matchedOrder);

  if (!matchedOrder) {
    res.status(400).send({ status: "error", error: "Order not found." });
  }

  res.status(200).send({ status: "success", order: matchedOrder });
};

module.exports = {
  handleOrderInfo,
};
