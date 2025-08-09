import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16" id="services">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Colleborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 items-center mt-20"
      >
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="Responsive Design"
            description="Creating user interfaces that look and work beautifully across all devices, from mobile to desktop."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Performance Optimization"
            description="Optimizing code and resources to improve speed and enhance the user experience."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="Interactive UI"
            description="Building engaging animations and interactions that make the user experience more enjoyable."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s4.png"
            name="Modern Front-End Development"
            description="Leveraging the latest libraries and frameworks to build scalable and efficient projects."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
