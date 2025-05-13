
import { useRef, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialIcon = ({ type, link }) => {
  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram
  };
  
  const Icon = icons[type];
  
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-diamate-medium-gray hover:text-diamate-bright-blue transition-colors"
    >
      <Icon size={18} />
    </a>
  );
};

const TeamMember = ({ image, name, role, delay, socials }) => {
  return (
    <div 
      className="team-card opacity-0" 
      data-animate="true"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-diamate-medium-gray">{role}</p>
      
      {/* Social Media Icons */}
      {socials && socials.length > 0 && (
        <div className="flex items-center justify-center space-x-3 mt-3">
          {socials.map((social, idx) => (
            <SocialIcon key={idx} type={social.type} link={social.link} />
          ))}
        </div>
      )}
    </div>
  );
};

const TeamSection = () => {
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

  const teamMembers = [
    {
      image: "/team/team1.jpg",
      name: "Ridha Bintang Adia",
      role: "Chief Medical Officer",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "twitter", link: "https://twitter.com" }
      ]
    },
    {
      image: "/team/team2.jpg",
      name: "Al Fariz Dw Prasetia",
      role: "AI Research Director",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "twitter", link: "https://twitter.com" }
      ]
    },
    {
      image: "/team/team3.jpg",
      name: "Muhammad Fajr",
      role: "Product Developer",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "facebook", link: "https://facebook.com" },
        { type: "instagram", link: "https://instagram.com" }
      ]
    },
    {
      image: "/team/team4.jpg",
      name: "Leonard Boghi Kumoro",
      role: "UX Designer",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "instagram", link: "https://instagram.com" }
      ]
    },
    {
      image: "/team/team5.jpg",
      name: "Randika Farhan Rachimi",
      role: "ML Engineer",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "twitter", link: "https://twitter.com" }
      ]
    },
    {
      image: "/team/team6.jpg",
      name: "Damar Syarafi Ramadhani",
      role: "ML Engineer",
      socials: [
        { type: "linkedin", link: "https://linkedin.com" },
        { type: "twitter", link: "https://twitter.com" }
      ]
    }
  ];

  return (
    <section id="tim" className="section bg-diamate-light-gray py-20" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2 className="opacity-0" data-animate="true">Kenali Tim DiaMate</h2>
          <p className="opacity-0" data-animate="true">
            Kami bersatu demi tujuan yang sama: membantu orang mencegah risiko diabetes dengan teknologi
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              socials={member.socials}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
