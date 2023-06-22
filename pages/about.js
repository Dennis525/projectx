import React from 'react';
import Wrapper from '@/components/Wrapper';

const about = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">
            About Us
          </div>
          <div className="text-base mt-5">
            At our company, we strive to provide high-quality products and excellent service to our customers.
          </div>
          <div className="text-base mt-5">
            We have a wide range of products available, including electronics, accessories, and more.
          </div>
          <div className="text-base mt-5">
            Our dedicated team is committed to ensuring customer satisfaction and delivering a seamless shopping experience.
          </div>
          <div className="text-base mt-5">
            If you have any questions or feedback, please don't hesitate to reach out to us.
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default about;

