import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = React.useState(item.quantity);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setItemQuantity(item.quantity);
  }, [item.quantity]);

  const handleUserInput = (e) => {
    let input = e.target.value;
    const id = item.id;
    e.preventDefault();
    dispatch(console.log("remove item"));
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
            <StyledH4 onClick={() => console.log("remove item")}>x</StyledH4>
          </div>
          <img src={item.imageSrc} />
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
  margin: 0;
`;

const StyledH4 = styled.h4`
  color: #fff;
  margin: 0;

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
