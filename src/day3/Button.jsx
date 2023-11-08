const Button = (props) => {
    return( 
        <button className={`px-4 py-2 bg- ${color}-500 rounded-lg`}>{props.children}</button>
    );
};
export default Button;