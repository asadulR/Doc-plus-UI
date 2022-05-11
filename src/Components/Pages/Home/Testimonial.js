import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            city: 'New York',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'Luchy Doe',
            city: 'Washington DC',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Ema Watshon',
            city: 'California',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ];


    return (
        <section className='container mx-auto px-3'>
            <div className=' flex justify-between my-16'>
                <div>
                    <h5 className='text-xl mb-2 text-primary font-bold'>Testimonial</h5>
                    <h2 className='text-3xl font-semibold text-accent'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-40' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review 
                        
                        key={review._id}
                        singleReview= {review}
                        ></Review> )
                }
            </div>
        </section>
    );
};

export default Testimonial;