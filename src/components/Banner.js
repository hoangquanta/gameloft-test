import './../style/banner.scss';
import placeholder from './../media/placeholder.png';
import nintendo from './../media/nintendo.jpeg';
import microsoft from './../media/microsoft.jpeg';
import steam from './../media/steam.jpeg';


function Banner() {
  return (
    <div className="banner">
        <div className='banner-body container'>
            <div className='banner-image'>
                <img src={placeholder} alt='placeholder'/>
            </div>
            <div className='banner-text'>   
                <h2 className='game-title'>Gameloft game</h2>
                <div className='review'>
                    <div className='category'>Racing/Action</div>
                    <div className='rating'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="68.063" height="10.456" viewBox="142 605 68.063 10.456"><g data-name="Group 780"><path d="m152.193 608.737-3.219-.492-1.442-3.073c-.108-.23-.485-.23-.593 0l-1.442 3.073-3.219.492a.327.327 0 0 0-.185.552l2.339 2.397-.553 3.389a.327.327 0 0 0 .481.339l2.876-1.59 2.875 1.59a.327.327 0 0 0 .481-.339l-.553-3.388 2.339-2.398a.327.327 0 0 0-.185-.552ZM166.591 608.737l-3.219-.492-1.442-3.073c-.108-.23-.485-.23-.593 0l-1.442 3.073-3.219.492a.327.327 0 0 0-.185.552l2.339 2.397-.553 3.389a.327.327 0 0 0 .481.339l2.876-1.59 2.875 1.59a.327.327 0 0 0 .481-.339l-.553-3.388 2.339-2.398a.327.327 0 0 0-.185-.552ZM180.99 608.737l-3.22-.492-1.442-3.073c-.108-.23-.485-.23-.593 0l-1.442 3.073-3.219.492a.327.327 0 0 0-.185.552l2.34 2.397-.554 3.389a.327.327 0 0 0 .482.339l2.875-1.59 2.875 1.59a.327.327 0 0 0 .481-.339l-.553-3.388 2.339-2.398a.327.327 0 0 0-.185-.552ZM195.387 608.737l-3.219-.492-1.442-3.073c-.108-.23-.485-.23-.592 0l-1.443 3.073-3.219.492a.327.327 0 0 0-.185.552l2.34 2.397-.554 3.389a.327.327 0 0 0 .482.339l2.875-1.59 2.875 1.59a.327.327 0 0 0 .481-.339l-.553-3.388 2.339-2.398a.327.327 0 0 0-.185-.552Z" fill="#ffc107" fill-rule="evenodd" data-name="star"/><path d="m209.785 608.737-3.219-.492-1.442-3.073c-.108-.23-.485-.23-.592 0l-1.443 3.073-3.219.492a.327.327 0 0 0-.184.552l2.338 2.397-.553 3.389a.327.327 0 0 0 .482.339l2.875-1.59 2.875 1.59a.327.327 0 0 0 .481-.339l-.553-3.388 2.339-2.398a.327.327 0 0 0-.185-.552Z" stroke-linejoin="round" stroke-linecap="round" stroke="#fff" fill="transparent" data-name="star"/></g></svg>
                    </div>
                </div>
                <div className='game-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...
                </div>
            </div>
        </div>
        <div className='banner-footer'>
            <div className='container'>
                <a href='#' className='download'>Download latest version</a>
                <div className='platforms'>
                    <a href='#' className='platform nintendo'><img src={nintendo} alt='nintendo'/></a>
                    <a href='#' className='platform microsoft'><img src={microsoft} alt='microsoft'/></a>
                    <a href='#' className='platform steam'><img src={steam} alt='steam'/></a>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Banner;