import React, {useState} from 'react'

 const Card = ({img, price, title, info}) => {

  const [isShown, setIsShown] = useState(true);
  const [readMore, setReadMore] = useState(false);

  function deleteTours() {
      setIsShown(prevIsShown => !prevIsShown);
  }

  function readMoreBtn() {
      setReadMore(prevIsReadMore => !prevIsReadMore);
  }

  return (
    <div>
       { isShown &&
       <div className="card">
      <img src={`../../images/${img}`} alt="" />
      <span className="price">{price}</span>
      <div className="text">
      <h3 className="title">{title}</h3>  
      <p className="info">{readMore ? info : info.substring(0, 200)}...</p>
      <button className='btn' onClick={readMoreBtn}>{readMore ? 'Show Less' : 'Read More'}</button>
      <button className='delete-btn' onClick={deleteTours}>Not interested</button>
      </div>
    </div>
    }
    </div>
  );
}


export default Card;