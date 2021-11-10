import React from "react";

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        const {id, title, description} = props.location.state.product;

        this.state = {
            id,
            title,
            description,
        };
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.description === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.updateProductHandler(this.state);
        this.setState({ title: "", description: "" });
        this.props.history.push("/");
    };
    render() {
        return (
            <div className="ui main">
                <h2>Update Product</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Omschrijving</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Omschrijving"
                            value={this.state.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }
}

export default EditProduct;