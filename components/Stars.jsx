"use client";

const testimonials = [
  {
    text: '"Paul was the best first developer a small client could ask for. Paul was always responsive and provided regular updates, making collaboration smooth and efficient. When we faced challenges, he quickly devised solutions that kept the project on track. Working together was a fantastic experience, and I highly recommend him for any development projects."',
    stars: 5,
  },
  {
    text: '"Paul is wonderful to work with. A very good freelancer and greatly recommended!"',
    stars: 5,
  },
  {
    text: '"Paul was an absolute pleasure to work with."',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {testimonials.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col items-center justify-center text-center p-6"
                key={index}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M12 .587l3.668 7.431 8.215 1.195-5.937 5.783 1.4 8.166L12 18.902l-7.346 3.86 1.4-8.166-5.937-5.783 8.215-1.195z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 leading-snug">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
