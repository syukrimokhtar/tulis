import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
/*
    styles
*/
const useStyles = makeStyles((theme) => ({
  form: {
    padding: 10
  },
  content: {
    fontSize:60,
    padding: 0,
    margin: 0,
    width: '90vw',
    height: '95vh',
    overflow:"hidden",
    color: "#F2F3F4",
    backgroundColor: "#2C3E50",
    border: "none",
    fontFamily: "Roboto",
    outline: "none",
    boxShadow: "none",
    resize: "none",
    fontWeight: "bold"
  },
  float: {
    position:"fixed",
    width:"60px",
    height:"60px",
    bottom:"50px",
    right: "50px",
    backgroundColor: "#D4AC0D",
    color: "#000",
    borderRadius: "50px",
    textAlign: "center"
  }
  
}));


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const handleClear = (e: any) => {
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
    setValue("");
  };
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form className={classes.form}>
        <textarea onChange={handleChange} defaultValue={value} className={classes.content}></textarea>
      </form>
    <a href="#" className={classes.float} onClick={handleClear}>
      <i className="fa fa-trash fa-2x" style={{marginTop:"12px"}}></i>
    </a>
  </div>
  );
}

export default App;
