import React from 'react';

import '../Styles/TestimonialSec.css';

const TestimonialSec = () => {
  return (
    <section id="testimonial">
        <div class="left">
            <img src="img/testimonial.jpg" alt="" />
        </div>
        <div class="right">
            <div class="content">
                <h2 class="left"><span>Testimonials</span></h2>
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone. </p>
                <div class="testimonialInfo">
                    <div class="leftInner">
                        <img src='img/testimonial-man.jpg' alt='John Doe' />
                    </div>
                    <div class="rightInner">
                        <h4>John Doe</h4>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TestimonialSec;
