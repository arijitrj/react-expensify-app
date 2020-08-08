import React from 'react';
import {connect} from 'react-redux';
import ExpenselistIteam from './ExpenseListItem';
import sortedExpenses from '../selectors/expenses'
//import { ProgressPlugin } from 'webpack';

const ExpenseList= (props)=>{

    return(
        <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ExpenselistIteam key={expense.id}{...expense}/>;
        })}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
      expenses: sortedExpenses(state.expenses , state.filters)
     
    };
  };
  
  export default connect(mapStateToProps)(ExpenseList);//video np 101 of andrew

  

/*const ConnetedExpenseList = connect((state)=>{
    return{
        expenses: state.expenses
    };
})(ExpenseList);

export default ConnetedExpenseList;*/
