
import { useRef, useEffect } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-diamate-soft-blue flex items-center justify-center">
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-poppins font-semibold mb-3 text-center">{title}</h3>
      <p className="text-diamate-medium-gray text-center">{description}</p>
    </div>
  );
};

const Features = () => {
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
              }, 200 * index); // Stagger the animations
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

  const features = [
    {
      icon: "/icons/ai.svg",
      title: "Analisis Berbasis AI",
      description: "Deteksi dan analisis risiko diabetes menggunakan teknologi kecerdasan buatan terbaik."
    },
    {
      icon: "/icons/monitor.svg",
      title: "Real-time Monitoring",
      description: "Pantau kesehatan Anda secara real-time dengan visualisasi data yang mudah dipahami."
    },
    {
      icon: "/icons/insight.svg",
      title: "Great Insights",
      description: "Dapatkan wawasan kesehatan personal berdasarkan data anda untuk keputusan yang lebih baik."
    }
  ];

  return (
    <section id="fitur" className="section bg-diamate-light-gray" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="opacity-0" data-animate="true">Fitur Andalan untuk Bantu Jaga Kesehatanmu</h2>
          <p className="opacity-0" data-animate="true">
            Cegah diabetes sejak dini dengan teknologi canggih yang membantu kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
