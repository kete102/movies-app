import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import MoviesContainer from './components/MoviesContainer'

function App() {

  return (
    <div className='relative h-screen w-full flex flex-col items-center text-white'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header/>
      <main className='container flex-1 w-full max-w-[1300px] flex flex-col items-center'>
        <section className='mt-6 w-full flex items-center justify-center'>
          <Form/>
        </section>
        <section className='bg-white/5 rounded-md mt-4 flex-1 w-full'>
          <MoviesContainer />
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
