
import './App.css'
import InputBar from './components/InputBar'
import useLocationApi from './hooks/useLocationApi'
import bgImage from './assets/Rick and Morty bg.png'


function App() {

   const {locationName} = useLocationApi()
  

  return (
    <div className="App md:max-w-[100%] flex-col justify-items-center justify-center mx-auto">
        <div className='flex justify-center'>
          <img src={bgImage} alt="" />
        </div>
         <InputBar locationName={locationName}
         className=""/>
    </div>
  )
}  

export default App
