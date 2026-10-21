
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Milou Andersen",
    rating: 5,
    text: "I'm a regular customer, the quality of their food is exceptional! Everything is so fresh, with very generous portions! My favourite Chinese restaurant in Waterloo.",
    date: "September 2025"
  },
  {
    id: 2,
    name: "Aries Monkey",
    rating: 5,
    text: "Old school Chinese restaurant. Has been in our community for over 40 years. Food quality hasn't changed. We ordered combination plates with two side dishes. Delicious!!! Service was quick and friendly. Very nice family.",
    date: "September 2025"
  },
  {
    id: 3,
    name: "McKenzie Hall",
    rating: 5,
    text: "If I could leave 100 stars I would. I could eat this food morning noon and night and not get sick of it. It's about a 25 minute drive from my house and it is so beyond worth it, they never disappoint!",
    date: "September 2025"
  },
  {
    id: 4,
    name: "Mac A.",
    rating: 4,
    text: "I've only ever had take-out from here, and I've always enjoyed the food. It's good quality Chinese-Canadian food, and I've never been disappointed in a dish. The Sesame chicken really does set this place apart though. You have to try it!",
    date: "November 2025"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + slidesToShow));
  }, [currentIndex, slidesToShow]);

  const nextSlide = () => {
    if (currentIndex + slidesToShow < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - slidesToShow);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Discover the experiences of our valued patrons</p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <div className="bg-ming-light p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="mb-4">
                    <h4 className="font-bold text-ming-black">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "fill-ming-gold text-ming-gold"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-ming-dark/80 flex-grow mb-4">{testimonial.text}</p>
                  <p className="text-sm text-ming-dark/60 text-right italic">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-ming-light transition-all duration-300 hidden sm:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-ming-black" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-ming-light transition-all duration-300 hidden sm:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-ming-black" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2 sm:hidden">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-ming-light transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-ming-black" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-ming-light transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-ming-black" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=ming%27s+chinese+restaurant+waterloo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ming-red hover:text-ming-red/80 font-medium transition-colors duration-300"
          >
            Read more reviews on Google
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
