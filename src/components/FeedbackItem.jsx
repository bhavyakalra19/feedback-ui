// import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {
  // const [rating, setRating]  = useState(7);
  // const [feedback, setFeedback] = useState('This is an example 123 of a feedback item');
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes color='purple'></FaTimes>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem