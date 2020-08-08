import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
    onSubmit={(expense)=>{
        //console.log(expenses);
        props.dispatch(addExpense(expense));
        props.history.push('/');// for automatically swithing to the browser
    }}
    />
  </div>
);

export default connect()(AddExpensePage);
