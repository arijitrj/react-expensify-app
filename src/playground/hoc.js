import  React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>{
    
    return( 
    <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>

    </div>
);

   
};

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
        <p>this is private info please don not share </p>
        <WrappedComponent {...props}/>
        </div>

    );
    
};

const requireAuthentication =(WrappedComponent)=>{
    return(props)=>(
        <div>
       { props.isAuth ? (<WrappedComponent {...props}/>):(<p>please log in to view the info </p>)}
       
        </div>

    )
}


const AuthInfo = requireAuthentication(Info)

const AdminInfo=withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuth={false}info="this is the info"/>,document.getElementById('app'));


