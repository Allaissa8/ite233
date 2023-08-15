import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <>
        <Link to='https://github.com/Allaissa8' className='text-dark fs-4'><FaGithub/></Link>
        <Link to='https://www.facebook.com/sorianoallaissaaaaa/' className='text-dark fs-4'><FaFacebook/></Link>
        <Link to='https://www.instagram.com/allaiii_/' className='text-dark fs-4'><FaInstagram/></Link>
    </>
  )
}

export default SocialLinks