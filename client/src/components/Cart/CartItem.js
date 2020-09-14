import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItemQty } from "../../actions";

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = React.useState(item.quantity);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setItemQuantity(item.quantity);
  }, [item.quantity]);

  const handleUserInput = (e) => {
    let input = e.target.value;
    const id = item._id;
    e.preventDefault();
    dispatch(updateCartItemQty(id, input));
  };

  return (
    <StyledDiv>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          border: "1px solid lightgrey",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 10px 20px 10px",
            }}
          >
            <StyledH3>{item.name}</StyledH3>
            <StyledH4
              onClick={(ev) => {
                ev.stopPropagation();
                console.log("id", item._id);
                dispatch(removeCartItem(item._id));
              }}
            >
              x
            </StyledH4>
          </div>
          <img src={item.imageSrc} style={{ margin: "10px" }} />
        </div>

        <div
          style={{
            display: "flex",
            background: "#000",
            margin: "0",
            padding: "0 0 10px 0",
          }}
        >
          <form style={{ marginTop: "10px" }}>
            <StyledLabel htmlFor="fname">Quantity:</StyledLabel>
            <StyledInput
              type="text"
              id="fname"
              name="fname"
              value={itemQuantity}
              onChange={handleUserInput}
            />
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const StyledH3 = styled.h3`
  color: #000;
  margin: 0 15px 0 0;
`;

const StyledH4 = styled.h4`
  color: #000;
  margin: 0 10px 10px 10px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  color: #b0a2b0;
  padding: 0 0 10px 10px;
`;

const StyledInput = styled.input`
  width: 30px;
  background: #000;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export default CartItem;
