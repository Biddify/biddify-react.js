import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const CardProduct = (props) => {
    const { id, title, description } = props.product;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/product/${id}`, state: { product: props.product } }}>
                    <div className="header">{title}</div>
                    <div>{description}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                onClick={() => props.clickHander(id)}
            />
            <Link to={{ pathname: `/edit/`, state: { product: props.product } }}>
            <i
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "7px" }}
            />
            </Link>
        </div>
    );
};

export default CardProduct;
