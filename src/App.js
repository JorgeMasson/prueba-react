import logo from './logo.svg';
import './App.css';
import PlatformProvider from './platform/chakra.';
import Access from './pages/access';

function App() {
  return (
    <PlatformProvider>
      <Access />
    </PlatformProvider>
  );
}

export default App;
