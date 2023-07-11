import UserCard from './components/UserCard'
import CardSong from './components/CardSong'
import './App.css'

function App() {
  
const name = "fulanito sanchez"
  return (
    <>
    <h1 className='title text-center'>JSX{5+10 }, hola me llamo {name} </h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis officiis? Maxime numquam, deserunt quis neque quam nemo sunt obcaecati ullam voluptas dignissimos vitae odit nihil? Quos, eius? Odit, laborum.</p>
    <img src="https://picsum.photos/200/300" alt="" />
    <input type="text" />
   <UserCard></UserCard>
   <CardSong></CardSong>
    </>
  )
}

export default App
