
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ image, title, date, excerpt, link, delay }) => {
  return (
    <div
      className="blog-card opacity-0 relative group"
      data-animate="true"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <Link to={link} className="block">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </Link>
      </div>
      <div className="p-6 relative">
        <div className="absolute -top-5 right-5 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
          <span className="text-diamate-bright-blue text-xs font-medium">{date.split(" ")[0]}</span>
        </div>
        <p className="text-sm text-diamate-medium-gray mb-2">{date}</p>
        <Link to={link}>
          <h3 className="text-xl font-semibold mb-2 hover:text-diamate-blue transition-colors">{title}</h3>
        </Link>
        <p className="text-diamate-medium-gray line-clamp-2">{excerpt}</p>
        <Link to={link} className="inline-flex items-center mt-4 text-diamate-bright-blue font-semibold hover:text-diamate-blue transition-colors group-hover:gap-2">
          <span>Baca selengkapnya</span>
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
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

  const blogPosts = [
    {
      image: "/blog/faktor-risiko.jpg",
      title: "Memahami Faktor Risiko Diabetes Tipe 2",
      date: "12 Mei 2023",
      excerpt: "Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif.",
      link: "/blog/faktor-risiko-diabetes",
    },
    {
      image: "/blog/gaya-hidup.jpg",
      title: "Perubahan Gaya Hidup untuk Pencegahan",
      date: "5 Mei 2023",
      excerpt: "Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.",
      link: "/blog/gaya-hidup-sehat",
    },
    {
      image: "/blog/ai-health.jpg",
      title: "AI dalam Layanan Kesehatan, Masa Depan",
      date: "28 April 2023",
      excerpt: "Menjelajahi bagaimana teknologi kecerdasan buatan sedang merevolusi deteksi dini dan pengobatan diabetes.",
      link: "/blog/ai-dalam-kesehatan",
    },
  ];

  return (
    <section id="blog" className="section py-24 relative" ref={sectionRef}>
      <div className="absolute top-0 right-0 w-72 h-72 bg-diamate-soft-blue/30 rounded-full filter blur-5xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-diamate-secondary-purple/20 rounded-full filter blur-5xl opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="opacity-0" data-animate="true">
            Wawasan Kesehatan Terbaru
          </h2>
          <p className="opacity-0" data-animate="true">
            Tetap terinformasi dengan penelitian diabetes terkini dan tips kesehatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              link={post.link}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn btn-secondary group relative overflow-hidden">
            <span className="relative z-10 inline-flex items-center">
              <span>Lihat Semua Artikel</span>
              <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-0 left-0 w-full h-0 bg-diamate-bright-blue/10 transition-all duration-300 group-hover:h-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
