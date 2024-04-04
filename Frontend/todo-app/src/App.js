import './App.css';
import Counter from './components/counter/Counter';
import CounterButton from './components/counter/Counter';
import {PropTypes} from 'prop-types'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number
}

CounterButton.defaultProps = {
  by: 1
}



export default App;
