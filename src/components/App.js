import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import api from '../api/products';
import Header from "./Header";
import AddProduct from "./AddProduct";
import ListProduct from "./ListProduct";
import DetailProduct from "./DetailProduct";
import EditProduct from "./EditProduct";

function App() {
    const LOCAL_STORAGE_KEY = "products";
    const [products, setProducts] = useState([]);

    //RetrieveProducts
    const retrieveProducts = async () => {
        const response = await api.get('api/products')

        return response.data;
    }

    const addProductHandler = async (product) => {
        const response = await api.post('api/products', product)

        setProducts([...products, response.data]);
    };

    const updateProductHandler = async (product) => {
        const response = await api.put('api/products/'+ product.id, product);

        console.log(response.data);

        const {id} = response.data;

        setProducts(
          products.map((product) => {
              return product.id === id ? {...response.data} : product
          })
        );
    };

    const removeProductHandler = async (id) => {
        await api.delete('api/products/'+ id);

        const newListProduct = products.filter((product) => {
            return product.id !== id;
        });

        setProducts(newListProduct);
    };

    useEffect(() => {
       const getAllProducts = async() => {
           const allProducts = await retrieveProducts();
           if(allProducts) setProducts(allProducts);
       }

       getAllProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }, [products]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ListProduct
                                {...props}
                                products={products}
                                getProductId={removeProductHandler}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        render={(props) => (
                            <AddProduct {...props} addProductHandler={addProductHandler} />
                        )}
                    />

                    <Route
                        path="/edit"
                        render={(props) => (
                            <EditProduct {...props} updateProductHandler={updateProductHandler} />
                        )}
                    />

                    <Route path="/product/:id" component={DetailProduct} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
