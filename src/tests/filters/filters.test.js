import moment from 'moment';
import {setStartDate,setEndDate , sortByDate, sortByAmount,setTextFilter} from '../../actions/filters';

test("should test startdate generate set start date " ,()=>{
    const action = setStartDate(moment(0)); 
    expect(action).toEqual({ 
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});

test("should test set end date & generate set enddate " ,()=>{
    const action = setEndDate(moment(1));
    expect(action).toEqual({ 
        type: 'SET_END_DATE',
        endDate:moment(1)
    })
});

test("should test the sort by date ", ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test("should test the sort by date ", ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
test("should test the sort by date ", ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test("should test settextFilter ", ()=>{
    const action = setTextFilter("rj");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
         text:"rj"
    })
})