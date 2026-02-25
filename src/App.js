import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
