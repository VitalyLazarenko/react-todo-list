import React, {Component} from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component{

    render() {
        return(
            <div className="item-add-form">
                <input />
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('hello World!')}
                >
                    Add Item
                </button>
            </div>
        )
    }
}
