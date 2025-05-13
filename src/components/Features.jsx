
import { useRef, useEffect } from "react";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="feature-card group opacity-0 hover:transform hover:translate-y-[-8px]"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="true"
    >
      <div className="mb-6 flex items-center justify-center relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-diamate-soft-blue flex items-center justify-center relative z-10 group-hover:bg-diamate-bright-blue/20 transition-all duration-500">
          <img src={icon} alt={title} className="w-8 h-8 z-10 relative" />
        </div>
        <div className="absolute w-24 h-24 rounded-full bg-diamate-blue/10 group-hover:bg-diamate-blue/20 animate-pulse transition-all duration-700" />
      </div>
      <h3 className="text-xl font-poppins font-semibold mb-3 text-center group-hover:text-diamate-bright-blue transition-colors">{title}</h3>
      <p className="text-diamate-medium-gray text-center">{description}</p>
      <div className="w-full flex justify-center mt-6">
        <div className="h-1 w-0 bg-gradient-to-r from-diamate-bright-blue to-diamate-blue rounded-full group-hover:w-16 transition-all duration-500"></div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll("[data-animate='true']");
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in");
                element.classList.remove("opacity-0");
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
    <section id="fitur" className="section bg-diamate-light-gray py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-diamate-blue/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-diamate-secondary-purple/10 rounded-full filter blur-3xl" />
        
        <div className="section-title relative z-10">
          <h2 className="opacity-0 mb-8" data-animate="true">Fitur Andalan untuk Bantu Jaga Kesehatanmu</h2>
          <p className="opacity-0 max-w-2xl mx-auto" data-animate="true">
            Cegah diabetes sejak dini dengan teknologi canggih yang membantu kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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
