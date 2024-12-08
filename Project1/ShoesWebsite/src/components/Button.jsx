const Button = (props) => {
    const styles = {
        backgroundColor: props.BackVal ? 'red' : 'transparent',
        color: props.FontVal ? 'white' : '#5A5959',
        fontSize:'24px',
        fontWeight:'600',
        cursor:'pointer'
    };

    return (
        <button style={styles}>{props.text}</button>
    );
}

export default Button;

