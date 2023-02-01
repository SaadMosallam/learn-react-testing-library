import React, { useState, useEffect } from "react";
import { useRetail } from "./RetailContext";
import PropTypes from "prop-types";

const ProductDetail = () => {
  const {
    state: { showProductDetails },
  } = useRetail();
  return showProductDetails ? (
    <Details {...showProductDetails} />
  ) : (
    <PlaceholderDetails />
  );
};

const Details = (props) => {
  const { id, image, title, description, price } = props;
  const [quantity, updateQuantity] = useState(1);
  const {
    addToCart,
    addToFavorites,
    state: { favorites },
  } = useRetail();

  const handleChange = (event) => updateQuantity(event.target.value);
  const handleAddToCart = () => {
    if (quantity >= 1 && quantity <= 10) {
      addToCart(props, quantity);
      updateQuantity(1);
    } else {
      updateQuantity(1);
    }
  };
  const handleFavorites = () => {
    addToFavorites(id);
  };

  useEffect(() => {
    updateQuantity(1);
  }, [props]);

  return (
    <div className="jumbotron col-8 text-center p-4">
      <div className="d-flex">
        <img
          className="card-img-top"
          style={{ width: "12rem" }}
          src={image}
          alt={title}
        />
        <div>
          <h1 style={{ fontSize: "1.5rem" }}>{title}</h1>
          <p style={{ fontSize: "0.9rem" }}>{description}</p>
          <h3 className="card-text text-success">${price}</h3>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-between">
        {favorites.find((favorite) => favorite === id) ? (
          <button type="button" className="btn btn-warning">
            ADDED TO FAVORITES
          </button>
        ) : (
          <button
            onClick={handleFavorites}
            type="button"
            className="btn btn-primary"
          >
            ADD TO FAVORITES
          </button>
        )}
        <div>
          <span className="lead">Qty:</span>
          <input
            value={quantity}
            onChange={handleChange}
            type="number"
            name="quantity"
            min="1"
            max="10"
          ></input>

          <button
            onClick={handleAddToCart}
            type="button"
            className="btn btn-success"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const PlaceholderDetails = () => {
  return (
    <div className="jumbotron col-8 text-center">
      <h1>Retail Store</h1>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductDetail;
