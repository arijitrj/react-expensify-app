class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0  //props.count// step 1 -set default state object .
        }
    }
    componentDidMount(){
        console.log ("page refersh");
        const json = localStorage.getItem("count");
        const count = parseInt(json , 10);
        if(!isNaN(count)){
            this.setState(()=>({count:count}));
    }
        }
        
    componentDidUpdate(prevProps, prevState){

        if (prevState.count !== this.state.count){
            const json= this.state.count ;
            console.log("component updated ");
            localStorage.setItem("count" , json);}
        
        
    }
    componetWillMount(){
        console.log("deleted ");
        
    }
    handleAddOne(){
       this.setState((prevState)=>{
            return { // using saqure bracket because return returning a object actually .
                count: prevState.count+1
            };
       });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            };
        });
    }
    handleReset(){

        this.setState(()=>{
            return {
                count:0
            };
        });
    }

    render (){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>       
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )

    }

}
/*
Counter.defaultProps ={ 
    count : 0 // name os this count need to be same in constructor as well as while passin the object in react dom render 
} ; */
const AppRoot = document.getElementById("app");

ReactDOM.render( <Counter count ={34} /> , AppRoot);












/*let count = 0 ;
const addOne = ()=>{
   count++ ;
   renderCounterApp();
}
const minusOne = ()=> {
    count = count -1 ;
    renderCounterApp();
    
}
const reset = ()=>{
    count = 0 ; 
    renderCounterApp();
}

const appRoo = document.getElementById("app")


const renderCounterApp = ()=>{
    const templateTwo = (
        <div>
        <h1>count:{count}</h1>
        <button onClick={addOne} >+1</button>
        <button onClick={minusOne}> - 1</button>
        <button onClick={reset} > submit</button>
        
        </div>
    
    );
  ReactDOM.render(templateTwo, appRoo);
}

renderCounterApp(); */