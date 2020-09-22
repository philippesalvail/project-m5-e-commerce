import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItemQty } from "../../actions";

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = React.useState(item.quantity);

  const dispatch = useDispatch();

  React.useEffect(() => {
    item.quantity ? setItemQuantity(item.quantity) : setItemQuantity(1);
  }, [item.quantity]);

  const handleUserInput = (e) => {
    e.preventDefault();
    let input = e.target.value;
    const id = item._id;

    setItemQuantity(input);
    dispatch(updateCartItemQty(id, input));
  };

  return (
    <CartItemWrapper>
      <ImgWrapper>
        <CartItemImg src={item.imageSrc} />
      </ImgWrapper>

      <div style={{ margin: "10px" }}>
        <ItemName>{item.name}</ItemName>
        <div style={{ margin: "5px 5px 15px 5px" }}>{item.price}</div>
        <FormWrapper>
          <form
            style={{ marginTop: "10px" }}
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <StyledLabel htmlFor="quantity">Qty:</StyledLabel>
            <StyledInput
              type="text"
              id="quantity"
              name="quantity"
              defaultValue={itemQuantity}
              onChange={handleUserInput}
            />
          </form>
        </FormWrapper>
      </div>

      <div style={{ margin: 0 }}>
        <CloseButton
          onClick={(ev) => {
            ev.stopPropagation();
            console.log("id", item._id);
            dispatch(removeCartItem(item._id));
          }}
        >
          x
        </CloseButton>
      </div>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
`;

const ImgWrapper = styled.div`
  margin: 10px;
`;

const CartItemImg = styled.img`
  width: 100px;
`;

const FormWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0 0 10px 0;
`;

const ItemName = styled.h3`
  color: #000;
  margin: 0 15px 0 0;
`;

const CloseButton = styled.h4`
  color: #000;
  margin: 0 10px 10px 10px;
  padding: 0;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  color: #b0a2b0;
  padding: 0 10px 0 0;
`;

const StyledInput = styled.input`
  width: 30px;
  border: none;
  border-bottom: 2px solid lightgrey;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export default CartItem;
