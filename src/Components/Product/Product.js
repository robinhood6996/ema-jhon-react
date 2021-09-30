import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props);
    console.log(props.hero);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, seller, stock, price, star, starCount } = props.product;
    return (
        <div className="single-product">
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-seller">By: {seller}</p>
                <h4 className="product-price">Price: {price}</h4>
                <Rating initialRating={star} readonly emptySymbol='far fa-star icon' fullSymbol='fas fa-star icon'> </Rating>
                <span> ({starCount} people rated)</span>
                <p><small>Only {stock} products left in stock- Order soon</small></p>

                <button onClick={() => props.handleAddToCart(props.product)} className="cart-btn">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;