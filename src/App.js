import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';

const firebaseConfig = {
  apiKey: "AIzaSyD9au9Y-Bhx4C7Uf3xA-b3G9X0-9RoMNhU",
  authDomain: "testapp-dd266.firebaseapp.com",
  databaseURL: "https://testapp-dd266.firebaseio.com",
  projectId: "testapp-dd266",
  storageBucket: "testapp-dd266.appspot.com",
  messagingSenderId: "97391103528",
  appId: "1:97391103528:web:45bbba0e98743fda79af1d",
  measurementId: "G-NXEC03F6GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <h1> Login </h1>

      <div className="vertical-center">
        <TextField id="outlined-basic" label="E-mail" variant="outlined" margin="normal" />
        <TextField id="outlined-basic" label="Sign Up" variant="outlined" margin="normal" />
        <Button variant="contained" > Sign In</Button>
      </div>
    </div>
  );
}

export default App;
