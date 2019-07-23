import React from "react";

const Item = ({ item, onItemChange }) => {
  return (
    <React.Fragment>
      <div className="container" style={{marginLeft: 0}}>
        <div className="row">
        <h5>Détails</h5>
        </div>
        <div className="row">
          <div className="p-1">
            <input
              className="form-control"
              type="text"
              name="description"
              value={item.description}
              onChange={evt => onItemChange(evt, item, "description")}
              placeholder="description"
            />
          </div>
          <div className="p-1">
            <input
              className="form-control"
              type="number"
              name="quantité"
              value={item.quantity}
              onChange={evt => onItemChange(evt, item, "quantity")}
              placeholder="description"
            />
          </div>
          <div className="p-1">
            <input
              className="form-control"
              type="text"
              name="taxe"
              value={item.taxe}
              onChange={evt => onItemChange(evt, item, "taxe")}
              placeholder="taxe"
            />
          </div>
          <div className="p-1">
            <input
              className="form-control"
              type="text"
              name="amount"
              value={item.amount}
              onChange={evt => onItemChange(evt, item, "amount")}
              placeholder="montant"
            />
          </div>
        </div>
      </div> 
      <hr className="my-4" />
    </React.Fragment>
  );
};

export default Item;
