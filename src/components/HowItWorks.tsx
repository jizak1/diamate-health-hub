
import { useRef, useEffect } from "react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const Step = ({ number, title, description, delay, isLast = false }: StepProps) => {
  return (
    <div className="flex flex-col items-center md:items-start relative opacity-0" 
         data-animate="true" 
         style={{ animationDelay: `${delay}ms` }}>
      <div className="w-16 h-16 rounded-full bg-diamate-bright-blue flex items-center justify-center text-white font-bold text-2xl mb-4 z-10">
        {number}
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-8 w-full h-0.5 bg-diamate-soft-blue -z-0"></div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-diamate-medium-gray text-center md:text-left">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll("[data-animate='true']");
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                (element as HTMLElement).classList.add("animate-fade-in");
                (element as HTMLElement).classList.remove("opacity-0");
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Buat Akun",
      description: "Daftar dan lengkapi profil kesehatanmu dengan informasi dasar."
    },
    {
      number: 2,
      title: "Input Data",
      description: "Isi data kesehatan dan gaya hidupmu dengan aman dan mudah."
    },
    {
      number: 3,
      title: "Lihat Hasil",
      description: "Ketahui risiko kesehatan Anda."
    }
  ];

  return (
    <section id="how-it-works" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="opacity-0" data-animate="true">How DiaMate Works</h2>
          <p className="opacity-0" data-animate="true">
            Simple steps untuk atasi perjalanan kamu towards better health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={index * 200}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
