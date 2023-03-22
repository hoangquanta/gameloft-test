import './../style/promotion-card.scss';
import placeholder from './../media/placeholder.png'

function Promotion() {
  return (
    <div className='promotion-card-wrapper'>
        <div className='promotion-card'>
            <div className='promotion-content'>
                <div className='promotion-content-overview'>
                    <div className='top-img'><img src={placeholder}/></div>
                    <div className='promotion-title'>Short title <br/> here</div>
                </div>
                <div className='promotion-content-detail'>
                    <div>
                        <div className='promotion-title'>Short title <br/> here</div>
                        <div className='promotion-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...</div>
                    </div>
                    <div className='actions'>
                        <button className='button'>read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Promotion;