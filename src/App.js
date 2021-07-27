import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Home from './pages/Home/home'
import './scss/app.scss'

function App() {
  return (
    <div>
      <Header/>
      <main> 
      <Sidebar/>
      <Home />
      </main>
    </div>
  );
}

export default App;
