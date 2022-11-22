import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';

function App() {
  return (
    <ThemeProvider>
     <ThemeTogglerButton/>
    </ThemeProvider>
  );
}

export default App;

