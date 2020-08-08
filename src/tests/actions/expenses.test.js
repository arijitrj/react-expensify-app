import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test("testing of remove expense" ,()=>{
    const action = removeExpense({id:'123abc'}); 
    expect(action).toEqual({ //to eqal compare the things inside the object , because {}==={} is always false.
        type:'REMOVE_EXPENSE' ,
        id:'123abc'
    })
});

test("testing for edit expense " , ()=>{
    const action = editExpense("123abc" , {note:"new note value"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:"123abc",
        updates: {
            note:"new note value"
        }
    })

})

test("should set up addExpense object with provide values  ", ()=>{
    const expenseData={
        description : ' rent',
        note :'this was last moth date',
        amount : 109500,
        createdAt : 1000

    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })

});

test("should setup the add expense object with provide value",()=>{
    const action= addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
     expense: {
    id: expect.any(String),
    description:'',
    note:'',
    amount:0,
    createdAt:0
  }
    })

})