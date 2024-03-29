import React, { Component } from "react";
import InputText from "./inputText";
import Item from "./item";
import {renderPDFInDOM} from './pdfMaker';

class EstimateForm extends Component {
  state = {
    id: "",
    title: "",
    customerFirstName: "",
    customerLastName: "",
    items: {}
  };

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value;
    console.log([name]);
    this.setState({ [name]: value });
  }; 

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("Générer");
  };

  addItem = () => {
    const id = Date.now().toString();
    const items = { ...this.state.items };
    console.log(this, this.state.items);
    items[id] = {
      id: id,
      description: "",
      quantity: "1",
      taxe: 0.2,
      amount: 0
    };
    this.setState({ items });
    console.log(this, this.state.items);
  };

  handleItemChange = (evt, item, field) => {
    console.log(evt.currentTarget.value, item, field);
    const value = evt.currentTarget.value;
    const clonedItem = { ...item };
    clonedItem[field] = value;
    const clonedItems = { ...this.state.items };
    clonedItems[clonedItem.id] = clonedItem;
    this.setState({ items: clonedItems });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container estimateitem" style={{marginLeft: 0}}>
        <h2>Nouveau devis</h2>
        <hr className="my-4" />
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <InputText
                    label="ID"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                  />
                  <br />
                  <InputText
                    label="titre"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <br />
                  <InputText
                    label="Prénom du client"
                    name="customerFirstName"
                    value={this.state.customerFirstName}
                    onChange={this.handleChange}
                  />
                  <br />
                  <InputText
                    label="Nom du client"
                    name="customerLastName"
                    value={this.state.customerLastName}
                    onChange={this.handleChange}
                  />
                  <br />
                </div>
                <hr className="my-4" />
                <button onClick={this.addItem} className="btn btn-primary mr-3">
                  Ajouter une ligne
                </button>
                <button onClick={() => renderPDFInDOM(this.state)} className="btn btn-primary">
                  Générer le devis
                </button>
              </form>
            </div>
            <div className="col">
              {Object.keys(this.state.items).map((itemId, index) => (
                <Item
                  key={index}
                  item={this.state.items[itemId]}
                  onItemChange={this.handleItemChange}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
