import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
const ExpenseListItem = (props) => (
    <div>
    <Link to ={`/edit/${props.id}`}>
    <h3>{props.description}</h3>
    </Link>
      <h1>Items</h1>
      <p>{props.amount} - {props.createdAt}</p>
      <button onClick={(e) => {
        props.dispatch(removeExpense({id:props.id}));
      }}>Remove</button>
    </div>
  );
  export default connect()(ExpenseListItem);

 /*const ExpenseListItem = ({description , amount , createdAt , id })=>{ // here in jsx we are uing de structing
    return(
        <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
          dispatch(removeExpense({ id }));
        }}>Remove</button>
      </div>
      
    
    );
};


export default connect()(ExpenseListItem);

//export default ExpenseListItem;*/