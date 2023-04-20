import logo from './logo.svg';
import './App.css';
// import ReactLogo from './reactlogo'
// import Button from './buttton';
// import ReactBenefits from './Benifits'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Benifits of using React...</h2>
          <ol>
             <li>Component-based architecture</li>
             <li>Virtual DOM for efficient updates</li>
             <li>Rich ecosystem and community</li>
             <li>Cross-platform development</li>
             <li>Strong community support</li>
         </ol>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Get started...</button>
        </a>
      </header>
    </div>
  );
}

export default App;
