
import { Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 animate-fade-in">
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 w-12 h-12 border-l-4 border-t-4 border-diamate-bright-blue"></div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-diamate-dark-gray leading-tight">
                Kesehatanmu, <br />
                <span className="relative inline-block">
                  prioritas kami
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-diamate-bright-blue/30 rounded-full"></span>
                </span>
              </h1>
              <div className="absolute -right-4 -bottom-4 w-12 h-12 border-r-4 border-b-4 border-diamate-bright-blue"></div>
            </div>
            
            <p className="text-lg md:text-xl text-diamate-medium-gray mb-8 max-w-lg">
              Dapatkan pemahaman mendalam mengenai profil glukosa untuk mencegah dan membantu mengelola risiko diabetes sejak dini. Kenali
              risiko diabetes lebih awal dengan DiaMate. Dapatkan insight personal dan mulai kebiasaan kesehatanmu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn btn-primary group relative overflow-hidden">
                <span className="relative z-10">Mulai Sekarang</span>
                <span className="absolute top-0 left-0 w-full h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></span>
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp group relative overflow-hidden"
              >
                <span className="relative z-10">Konsultasi WhatsApp</span>
                <span className="absolute top-0 left-0 w-full h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></span>
              </a>
            </div>
          </div>
          <div className="md:col-span-6 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-diamate-blue/20 rounded-full filter blur-3xl animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-diamate-secondary-purple/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-diamate-bright-blue/20 rounded-lg rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-diamate-secondary-purple/20 rounded-full"></div>
              
              <img
                src="/hero-image.jpg"
                alt="DiaMate Health Monitoring"
                className="w-full rounded-2xl shadow-xl relative z-10 animate-scale-in"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 animate-fade-in animation-delay-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Risiko rendah terdeteksi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
