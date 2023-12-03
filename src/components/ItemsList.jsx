import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const ItemsList = ({ element, sendCart }) => {
  return (
    <>
      <Card style={{ width: "22rem", border: "none" }} className="hove mb-4">
        <Card.Img variant="top" className="cd" src={element.imgdata} />

        <div className="card_body">
          <div className="upper_data d-flex justify-content-between align-items-center">
            <h4 className="mt-2">{element.dish}</h4>
            <span>{element.rating}&nbsp;★</span>
          </div>

          <div className="lower_data d-flex justify-content-between ">
            <h5>{element.address}</h5>
            <span>₹ {element.price}</span>
          </div>
          <div className="extra"></div>

          <div className="last_data d-flex justify-content-between align-items-center">
            <img src={element.arrimg} className="limg" alt="" />
            <Button
              style={{
                width: "150px",
                background: "#ff3054db",
                border: "none",
              }}
              variant="outline-light"
              className="mt-2 mb-2"
              onClick={() => sendCart(element)}
            >
              Add TO Cart
            </Button>
            <img src={element.delimg} className="laimg" alt="" />
          </div>
        </div>
      </Card>
    </>
  );
};
