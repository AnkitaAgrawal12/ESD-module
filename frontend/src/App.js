import './App.css';
// commponent imports
import LoginComponent from './components/LoginComponent';
import SalaryHistoryComponent from './components/SalaryHistoryComponent';
import NavbarComponent from './components/NavbarComponent';

function App() {
	const loginUser = JSON.parse(window.sessionStorage.getItem('loggedInUser'))

	return (
		<div className="App">
			{
				loginUser===null && <LoginComponent />
			}
			{
				loginUser!==null && 
				<>
					<NavbarComponent/>
					<SalaryHistoryComponent
					{...loginUser}
					/>
				</>
			}
			</div>
	);
}

export default App;
