import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
      <header className="App-header">



        <h2>Login Form React-Bootstrap</h2>
        <form class="form-container" >
          
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
           </div>
           <button type="submit" class="btn btn-primary ">Submit</button>
  
        </form>
      </header>
    </div>
  );
}

export default App;
