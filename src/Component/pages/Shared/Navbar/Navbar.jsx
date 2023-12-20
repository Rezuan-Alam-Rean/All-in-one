import { Link } from 'react-router-dom'

// import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'
// import Logo from '../../../../assets/img/logop.png'

const Navbar = () => {

  return (
    <div className='   fixed top-0 z-10 max-w-7xl mx-auto w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10    bg-white  shadow-md'>
      <div className='py-4 border-b-[1px]'>
       
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
             {/* <Logo/> */}
            </Link>

            <div className='hidden md:flex' >
            <Link
              to='/'
              className='  px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Home
            </Link>

            <Link
              to='/Apartment'
              className='px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Apartments
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
