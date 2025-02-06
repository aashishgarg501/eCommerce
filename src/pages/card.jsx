import React from 'react'

const Card = ({ item }) => {
    const { image, title } = item
    return (
        <div>
            <div className='card'>
                <img src={image} alt="card" />
                <h5>{title}</h5>
                <p className='marginTop-10'> <u>Sign in</u> or create an account to see price</p>
            </div>
        </div>
    )
}

export default Card