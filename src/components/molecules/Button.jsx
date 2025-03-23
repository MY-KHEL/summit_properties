const Button = ({value, classname }) => {
    return (  
        <button className={`p-2 bg-projectblue/85 hover:bg-projectblue/100 text-white px-4 rounded ${classname}`}> 
       {value}
    </button>
       
    );
}
 
export default Button;