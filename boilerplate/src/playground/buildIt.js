
class TougleVisibility extends React.Component{

    constructor(props){
        super(props);
        this.handleTougleVisibility= this.handleTougleVisibility.bind(this); // we are binding to acess this inside of the method 
        this.state= {
             visibility:false 
        }
    };
     
   handleTougleVisibility(){
        this.setState((prevState)=>{
           return{
            visibility:!prevState.visibility // acessing previous values through prevState property of recat component 
           };
        });
    };

    render (){
        return(
    
            <div>
                <h1>title:visibility</h1>       
                <button onClick={this.handleTougleVisibility}>{this.state.visibility ? "hide  text" :"show text "}</button>
            </div>
    
    
        );
    
    }

};

const AppRoot = document.getElementById("app");

ReactDOM.render( <TougleVisibility/> , AppRoot);









/* const app = {
    title : "Visibility" ,
    msg: "hi there"

}
 let v = false ;
const touglevisibility = ()=>{
    v = !v;
    render();
}
 const appRoot = document.getElementById("app");

const render=()=>{

const template =(
 <div>
    <h1>{app.title}</h1>
    <button onClick={touglevisibility} >{v ? "hide  text" :"show text "} </button>
    {v && (
        <div><p>"hey there here is the text "</p></div>
    )}
    </div>
)
ReactDOM.render(template, appRoot);
}

render();*/