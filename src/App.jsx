import UpperBar from './components/UpperBar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { TailwindIndicator } from './components/TailwindIndicator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <UpperBar /> */}
      <Header />
      <main>
        <Outlet />
        <TailwindIndicator />
      </main>
      <Footer />
    </>
  );
}

export default App;
