import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./CardProduct";

const ListProduct = (props) => {
    console.log(props);

    const deleteProductHandler = (id) => {
        props.getProductId(id);
    };

    const renderListProduct = props.products.map((product) => {
        return (
            <ContactCard
                product={product}
                clickHander={deleteProductHandler}
                key={product.id}
            />
        );
    });
    return (
        <div className="main">
            <h2>
                Product List
                <Link to="/add">
                    <button className="ui button blue right">Add Product</button>
                </Link>
            </h2>
            <div className="ui celled list">{renderListProduct}</div>
        </div>
    );
};

export default ListProduct;