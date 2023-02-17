
import './App.css'

function App() {
  fetch('https://app.elplazas.com/api/v1/exchangeRate')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


  return (
    <>
      <h1>Hola</h1>
    </>
  )
}

export default App
