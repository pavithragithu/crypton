import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fb from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css'
function Footer(){
  return(
    <>
    <div className="container-fluid">
    <div className="row bg-dark text-light p-4" >
      <div className="col-md-3 ">
        <h5>links</h5>
        <li><a href="#" className="text-light">home</a></li>
        <li><a href="#e"className="text-light">about</a></li>
        <li><a href="#" className="text-light">women </a></li>
        <li><a href="#" className="text-light">men</a></li>
        <li> <a href="#" className="text-light">contact</a></li>
      </div>
      <div className="col-md-3 ">
        <h5>Discover</h5>
        <li>trending wears</li>
        <li>deals</li>
        <li>discount&offers</li>
        <li>modern styles</li>
      </div>
      <div className="col-md-3">
        <h5>lets chat!</h5>
        <div><TwitterIcon/></div>
        <div><WhatsAppIcon/></div>
        <div><Fb/></div>
        <div><YouTubeIcon/></div>
        

      </div>
      <div className="col-md-3">
        <h4 className="trippy">Trendy</h4>
        <p className="p-3">Join our Travel Discussions forum and discover or give advice of your own on everything journey-related.</p>
      </div>
      <hr/>
      <div className="text-center"><h6><CallIcon/>pn no:9764983401 </h6><h6><EmailIcon/>trendy.44@gmail.com</h6></div>
    </div>
    </div>
    </>
)}
export default Footer