import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import './scss/app.scss'

function App() {
  return (
    <div>
      <Header/>
      <div className="container"> 
      <Sidebar/>
      <div className="page-content"></div>
      </div>
    </div>
  );
}

export default App;
