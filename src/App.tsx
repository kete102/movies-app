import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import MoviesContainer from './components/MoviesContainer'

function App() {

  return (
  <div className='w-screen min-h-screen relative flex flex-col items-center overflow-hidden text-white'>
      <div className="absolute top-0  z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header/>
      <main className='flex flex-grow content-center w-full min-h-fit flex-col max-w-md md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1400px]'>
        <Form/>
        <MoviesContainer />
      </main>
      <Footer/>
    </div>
  )
}

export default App
