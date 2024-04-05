import './App.css';
import CounterButton from './components/counter/Counter';
import {PropTypes} from 'prop-types'
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
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
