import "./App.css";
import Form from "./components/Form";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import {useGlobalContext} from './services/context'

function App() {
  const {active, showResults} = useGlobalContext()
	return (
		<div className="App">
		{(!showResults && !active) && 	<Form />}
     {(!showResults && active) && < Quiz />}
     {(showResults && !active) && < Results />}
		</div>
	);
}

export default App;
