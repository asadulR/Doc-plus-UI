import React from 'react';

const Review = ({ singleReview }) => {
    const { name, img, review, city } = singleReview;
    return (
        <div>
            <div class="card max-w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='mb-5'>{review}</p>
                    <div class="flex items-center ">
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                                <img className='' src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl text-accent font-bold'>{name}</h4>
                            <h5 className='text-accent'>{city}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;