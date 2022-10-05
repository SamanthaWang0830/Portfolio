import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components/navigation/navigation.component'
import { Projects } from './components/projects/projects.component';
import { Skills } from './components/skills/skills.component';
import { Footer } from './components/footer/footer.component';
import {Home} from './components/home.component'


const App=()=> {
  return (
    <div className='App'>
      <Navigation/>
      <Home/>
      <Skills/>
      <Projects/>
      <Footer/> 
    </div>
  );
}

export default App;
