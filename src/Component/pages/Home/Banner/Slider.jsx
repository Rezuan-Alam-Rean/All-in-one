
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';



const Slider = () => {

  
  
 


  return (
    

      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        stopOnHover={false} 
      >
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/9gpdVMd/Whats-App-Image-2023-11-02-at-02-32-59-0f5db563.jpg" alt="Slide 1" />
        </div>
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/Syv6t6K/Whats-App-Image-2023-11-02-at-02-32-58-23b97bb3.jpg" alt="Slide 2" />
        </div>
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/R7TJjXg/Whats-App-Image-2023-10-31-at-15-38-18-014a55fe.jpg" alt="Slide 3" />
        </div>
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/ysMjgsp/Whats-App-Image-2023-11-02-at-02-32-59-b7178d62.jpg" alt="Slide 4" />
        </div>
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/hgg3RRk/Whats-App-Image-2023-11-02-at-02-32-58-fd2a4af8.jpg" alt="Slide 5" />
        </div>
        <div>
          <img className="max-h-[400px]" src="https://i.ibb.co/Pgn2CD9/Whats-App-Image-2023-10-31-at-15-38-15-6b9205cc.jpg" alt="Slide 6" />
        </div>
      </Carousel>

   
   
   
  );
};

export default Slider;
