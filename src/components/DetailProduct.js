import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const DetailProduct = (props) => {
    const { title, description } = props.location.state.product;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Product List
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DetailProduct;