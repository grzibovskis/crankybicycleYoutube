import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <div className='footer-menu'>
        <div>
          <ul className='footer-contacts'>
            <li>City</li>
            <li>Street name</li>
            <li>+9900000000</li>
          </ul>
        </div>
        <div>
          <ul className='footer-soc'>
            <li><a href="#"><InstagramIcon sx={{ fontSize: 35}}/></a></li>
            <li><a href="#"><FacebookIcon sx={{ fontSize: 35}}/></a></li>
            <li><a href="#"><YouTubeIcon sx={{ fontSize: 35}}/></a></li>
          </ul>
        </div>
      </div>
      <div className='footer-c'>
        <small>© all rights reserved</small>
      </div>
    </>
  )
}

export default Footer