import './../style/game-picture.scss';
import placeholder from './../media/placeholder-blue.png'

function GamePicture() {
  return (
    <div className='game-picture'>
        <div className='game-placeholder'><img src={placeholder}/></div>
        <div className='actions'>
            <button className='rounded-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16.462" height="14.838" viewBox="1021.836 4562.814 16.462 14.838"><g data-name="CompositeLayer"><path d="M1038.298 4574.855v2.796h-16.463 0v-2.796" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#141414" fill="transparent" data-name="Path 330"/><path d="M1030.035 4572.876V4562.814" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#141414" fill="transparent" data-name="Path 328"/><path d="m1026.87 4570.049 3.134 3.29 2.976-3.29" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#141414" fill="transparent" data-name="Path 329"/></g></svg>
            </button>
        </div>
    </div>
  );
}

export default GamePicture;