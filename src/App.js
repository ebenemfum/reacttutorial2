
import './App.css';


const Person = (props) =>
{
  return(
    <>
    <h1>First Name: {props.fname}</h1>
    <h2>Last Name: {props.lname}</h2>
    <h3>Age: {props.age}</h3>

    </>
  )
}

const App = (
) => 

{

  


  return(
    <div className='App'>
      <Person fname={'John'} lname={'Michaels'} />

    </div>
  );
} 

export default App;