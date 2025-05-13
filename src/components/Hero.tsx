
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-diamate-dark-gray leading-tight">
              Kesehatanmu, <br />
              prioritas kami
            </h1>
            <p className="text-lg md:text-xl text-diamate-medium-gray mb-8 max-w-lg">
              Dapatkan pemahaman mendalam mengenai profil glukosa untuk mencegah dan membantu mengelola risiko diabetes sejak dini. Kenali
              risiko diabetes lebih awal dengan DiaMate. Dapatkan insight personal dan mulai kebiasaan kesehatanmu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn btn-primary">
                Mulai Sekarang
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Konsultasi WhatsApp
              </a>
            </div>
          </div>
          <div className="md:col-span-6 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-diamate-blue/20 rounded-full filter blur-3xl animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-diamate-secondary-purple/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
              <img
                src="/hero-image.jpg"
                alt="DiaMate Health Monitoring"
                className="w-full rounded-2xl shadow-xl relative z-10 animate-scale-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
