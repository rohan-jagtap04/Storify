import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Link } from "react-router-dom";


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

    </div>
  );
}

export default App;
