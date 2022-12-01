import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function DetailSlider({ avatar }) {
  console.log(avatar);
  const [currentIndex, setCurrentIndex] = useState(0);
  let sliderStyles = {
    position: 'relative',
    height: '280px'
  }
  let slideStyles = {
    backgroundImage: `url(${avatar[currentIndex]}`,
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  let pre = {
    position: 'absolute',
    top: '50%',
    left: '0',
    padding: '10px',
    backgroundColor: '#4e4e4e',
    fontSize: '25px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '0px 5px 5px 0px'
  }
  let next = {
    position: 'absolute',
    top: '50%',
    right: '0',
    padding: '10px',
    backgroundColor: '#4e4e4e',
    fontSize: '25px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '5px 0px 0px 5px'
  }
  let wrapperImg = {
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0'
  }
  let imgBox = {
    width: '19%',
    marginRight: '10px',
    cursor: 'pointer'
  }
  let img = {
    width: '100%',
    height: '82px',
    objectFit: 'fill'
  }
  let like = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    fontSize: '16px'
  }

  const goToPrev = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? avatar.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === avatar.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
      {
        
          <div style={sliderStyles}>
            <div style={slideStyles}>
              <span style={pre} onClick={() => goToPrev()}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              <span style={next} onClick={() => goToNext()}>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
              <div style={slideStyles}>

              </div>
              <div style={wrapperImg}>
                {
                  avatar.map((item, index) => {
                    return (<>
                      <div style={imgBox} onClick={() => goToSlide(index)}>
                        <img style={img} src={item} alt="" />
                      </div>
                    </>)
                  })
                }
              </div>
              <div style={like}>
                <FontAwesomeIcon icon={faHeart} style={{ cursor: 'pointer', fontSize: '20px', color: '#333' }} />
                <span style={{ marginLeft: '10px' }}>Đã thích : 10,4k</span>
              </div>
            </div>

          </div>
        
      }
    </>
  )
}

export default DetailSlider