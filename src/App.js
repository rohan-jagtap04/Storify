import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <script>
          console.log(app)
          console.log(analytics)
        </script>
      </header>
    </div>
  );
}

export default App;
