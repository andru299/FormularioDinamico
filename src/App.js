import { Button, Badge } from 'react-bootstrap';
import NavBarMenu from './components/NavBarMenu';
import Introduction from './components/Introduction';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <NavBarMenu/> 
      <Introduction/>
      <Services/>
    </div>
  );
}

export default App;