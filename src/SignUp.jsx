import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function SignUp() {
    return (
      <div className="App">
        <h1> Sign Up </h1>
  
        <div className="vertical-center">
        <TextField id="outlined-basic" label="FullName" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="Retype Password" variant="outlined" margin="normal" />
          <Button variant="contained" > Sign Up</Button>
        </div>
        <Link to="/signin"> Want to login? </Link>
      </div>
    );
  }
  
  export default SignUp;