const Button = (props) => {

    let styles = {
        backgroundColor: props.bg ?'black':'transparent',
        color: props.tc?'black':'white',
        fontWeight:'600',
        height:'44px',
        padding:'10px 18px',
        borderRadius:'5px',
        width: props.widthlength?'472px':'220px',
        cursor:'pointer'
    }

  return (
    <button style={styles}>{props.text}</button>
  )
}

export default Button