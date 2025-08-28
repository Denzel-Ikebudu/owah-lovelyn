import React from 'react'
import review1 from '../../assets/review1.jpg'
import review2 from '../../assets/review2.jpg'
import './Reviews.css'


const Reviews = () => {
  return (
    <div className='review'>
      <div className='review-images'>
        <img src={review1} alt="" />
        <img src={review2} alt="" />
      </div>
    </div>
  )
}

export default Reviews
