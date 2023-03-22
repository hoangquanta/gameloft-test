import './../style/footer.scss';
import logo from './../media/Gameloft_Logo.png';
import socials from './../media/social-logos.svg';
import english from './../media/english.svg';




function Footer() {
  return (
    <div className='app-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='footer-logo'><img src={logo}/></div>
                    <div className='social-logos'>
                        <div className='logos-title'>Follow Us</div>
                        <div className='logos'><img src={socials}/></div>
                        <div><img src={english}/></div>
                    </div>
                </div>
                <div className='col-12 col-md-6 footer-links row'>
                    <div className='col-6 col-md-12 content'>
                        <div>
                            <div className='footer-title'>Visit</div>
                            <div className='links'>
                                Gameloft Games <br/>
                                Gameloft Careers <br/>
                                Gameloft News <br/>
                                Gameloft Forum <br/>
                                Gameloft Corporate <br/>
                                Gameloft Advertising <br/>
                                Gameloft Support
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-12 content'>
                        <div>
                            <div className='footer-title'>Legal</div>
                            <div className='links'>
                                Terms of Use <br/>
                                Privacy Policy <br/>
                                Cookies Policy <br/>
                                EULA <br/>
                                Legal Notices <br/>
                                Event Rules <br/>
                                Business Contacts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.
             <br/> All other trademarks are the property of their respective owners.</p>
        </div>
    </div>
  );
}

export default Footer;