
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';



const Slider = () => {






  return (

    <div className='mt-20'>

      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/Hhf3h7M/Screenshot-2023-12-24-154017.png" alt="Slide 4" />
        </div>
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/dmWmPDK/Screenshot-2023-12-24-154115.png" alt="Slide 1" />
        </div>
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/MDjMsMZ/Screenshot-2023-12-24-154324.png" alt="Slide 2" />
        </div>
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/7zytDg0/jeewantha-dilshan-qkf-HSJrf-P08-unsplash.jpg" alt="Slide 3" />
        </div>
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/QD7XMBB/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-ret.jpg" alt="Slide 5" />
        </div>
        <div>
          <img className="max-h-[220px] md:max-h-[450px]" src="https://i.ibb.co/Z2cbB6W/Screenshot-2023-12-24-153843.png" alt="Slide 6" />
        </div>
      </Carousel>

    </div>






  );
};

export default Slider;
