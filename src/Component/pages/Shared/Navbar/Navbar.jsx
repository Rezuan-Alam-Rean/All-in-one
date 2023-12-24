import { Link } from 'react-router-dom'

// import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'
// import Logo from '../../../../assets/img/logop.png'

const Navbar = () => {

  return (
    <div className='   max-w-7xl mx-auto fixed w-full bg-white top-0 z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
       
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
             {/* <Logo/> */}
             
                <img
              className=' ml-2 rounded-full'
              referrerPolicy='no-referrer'
              src="https://i.ibb.co/z5fdm9q/379560534-849358980169855-7780829300924460302-n.jpg"
              alt='profile'
              height='30'
              width='40'
            />
            </Link>

            <div className='hidden md:flex' >
            <Link
              to='/'
              className='  px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Home
            </Link>

            <Link
              to='/Projects'
              className='px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Projects
            </Link>
            <Link
              to='/Arts'
              className='px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Arts
            </Link>
            <Link
              to='/Contract'
              className='px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Contract
            </Link>
            </div>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
      
      </div>
    </div>
  )
}

export default Navbar
