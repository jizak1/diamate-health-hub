
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
  delay: number;
}

const BlogCard = ({ image, title, date, excerpt, link, delay }: BlogCardProps) => {
  return (
    <div
      className="blog-card opacity-0"
      data-animate="true"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={link}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <p className="text-sm text-diamate-medium-gray mb-2">{date}</p>
        <Link to={link}>
          <h3 className="text-xl font-semibold mb-2 hover:text-diamate-blue transition-colors">{title}</h3>
        </Link>
        <p className="text-diamate-medium-gray line-clamp-2">{excerpt}</p>
        <Link to={link} className="inline-block mt-4 text-diamate-bright-blue font-semibold hover:text-diamate-blue transition-colors">
          Baca selengkapnya →
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
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
    <section id="blog" className="section" ref={sectionRef}>
      <div className="container">
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
          <Link to="/blog" className="btn btn-secondary">
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
