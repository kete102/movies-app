import Github from './icons/Github'

function Footer() {
  return (

      <footer className='flex items-center gap-x-2 p-2'>
        <a href="https://github.com/kete102">
          Made with 🧡 by{' '}
          <strong className="inline-flex items-center gap-1 underline">
            Flavius Catalin <Github className='size-6' />
          </strong>
        </a>
      </footer>
  )
}

export default Footer
