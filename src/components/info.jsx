// import React, { Component } from "react";
import React from 'react';

// class Info extends Component {
//     render() { 
//         return ( 
//             <div className="container mt-5">
//             <div className="jumbotron">
//               <h1 className="display-4">Bienvenue sur votre générateur de devis</h1>
//                 <p className="lead">Créer un devis ?</p>
//                   <hr className="my-4"></hr>
//                 <p className="lead">C'est simple : cliquer sur le bouton ci-dessous</p>
//                 <button onClick={this.props.onHandleShowEstimateForm} type="button" className="btn btn-primary">nouveau devis</button>
//             </div>
//           </div> 
//          );
//     }
// }


// Stateless Functional Component
const Info = (props) => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
             <h1 className="display-4">Bienvenue sur votre générateur de devis</h1>
                 <p className="lead">Créer un devis ?</p>
                 <hr className="my-4"></hr>
                 <p className="lead">C'est simple : cliquer sur le bouton ci-dessous</p>
            <button onClick={props.onHandleShowEstimateForm} type="button" className="btn btn-primary">nouveau devis</button>
            </div>
        </div>
    );
}
 
export default Info;