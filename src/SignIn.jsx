import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function SignIn() {
    return (
      <div className="App">
        <h1> Sign In </h1>
  
        <div className="vertical-center">
          <TextField id="outlined-basic" label="E-mail" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="Password" variant="outlined" margin="normal" />
          <Button variant="contained" > Sign In</Button>
        </div>

        <Link to="/signup"> Want to create an account? </Link>
      </div>
    );
  }
  
  export default SignIn;