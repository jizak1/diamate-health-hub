
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Blog = () => {
  const featuredPost = {
    image: "/blog/faktor-risiko.jpg",
    title: "Memahami Faktor Risiko Diabetes Tipe 2",
    date: "12 Mei 2023",
    excerpt: "Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif untuk pencegahan yang lebih baik.",
    link: "/blog/faktor-risiko-diabetes",
  };

  const blogPosts = [
    {
      image: "/blog/gaya-hidup.jpg",
      title: "Perubahan Gaya Hidup untuk Pencegahan",
      date: "5 Mei 2023",
      excerpt: "Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.",
      link: "/blog/gaya-hidup-sehat",
      category: "Gaya Hidup",
    },
    {
      image: "/blog/ai-health.jpg",
      title: "AI dalam Layanan Kesehatan, Masa Depan",
      date: "28 April 2023",
      excerpt: "Menjelajahi bagaimana teknologi kecerdasan buatan sedang merevolusi deteksi dini dan pengobatan diabetes.",
      link: "/blog/ai-dalam-kesehatan",
      category: "Teknologi",
    },
    {
      image: "/blog/nutrition.jpg",
      title: "Nutrisi Penting untuk Pengaturan Gula Darah",
      date: "15 April 2023",
      excerpt: "Panduan lengkap tentang makanan dan nutrisi yang mendukung kadar gula darah yang stabil.",
      link: "#",
      category: "Nutrisi",
    },
    {
      image: "/blog/exercise.jpg",
      title: "Latihan Terbaik untuk Penderita Diabetes",
      date: "5 April 2023",
      excerpt: "Rutinitas latihan yang direkomendasikan untuk mengelola diabetes dan meningkatkan sensitivitas insulin.",
      link: "#",
      category: "Olahraga",
    },
    {
      image: "/blog/mental-health.jpg",
      title: "Aspek Psikologis dalam Pengelolaan Diabetes",
      date: "28 Maret 2023",
      excerpt: "Memahami hubungan antara kesehatan mental dan manajemen diabetes yang efektif.",
      link: "#",
      category: "Kesehatan Mental",
    },
  ];

  const categories = ["Semua", "Gaya Hidup", "Nutrisi", "Olahraga", "Teknologi", "Kesehatan Mental"];

  return (
    <>
      <Navbar />
      <div className="mt-20 pt-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Artikel & Wawasan</h1>
          <p className="text-xl text-diamate-medium-gray mb-12 text-center max-w-3xl mx-auto">
            Temukan artikel terbaru, tips kesehatan, dan wawasan tentang diabetes dan kesehatan secara umum
          </p>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="bg-diamate-soft-blue text-diamate-blue text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                    Artikel Unggulan
                  </div>
                  <Link to={featuredPost.link}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-diamate-bright-blue transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-diamate-medium-gray mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-diamate-medium-gray">{featuredPost.date}</span>
                    <Link to={featuredPost.link} className="text-diamate-bright-blue font-medium hover:text-diamate-blue transition-colors">
                      Baca selengkapnya →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    index === 0
                      ? "bg-diamate-bright-blue text-white"
                      : "bg-gray-100 text-diamate-medium-gray hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <Link to={post.link}>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-diamate-medium-gray">{post.date}</span>
                    <span className="bg-diamate-soft-blue text-diamate-blue text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <Link to={post.link}>
                    <h3 className="text-xl font-semibold mb-3 hover:text-diamate-bright-blue transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-diamate-medium-gray mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link to={post.link} className="text-diamate-bright-blue font-medium hover:text-diamate-blue transition-colors">
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mb-16">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-diamate-medium-gray hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-diamate-bright-blue text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-diamate-medium-gray hover:bg-gray-200 transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-diamate-medium-gray hover:bg-gray-200 transition-colors">
              3
            </button>
            <span className="text-diamate-medium-gray">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-diamate-medium-gray hover:bg-gray-200 transition-colors">
              8
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-diamate-medium-gray hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-hero rounded-2xl text-white p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dapatkan Artikel Terbaru di Email Anda</h2>
              <p className="mb-6 opacity-90">
                Berlangganan newsletter kami untuk mendapatkan artikel kesehatan terbaru dan tips pengelolaan diabetes langsung ke kotak masuk Anda.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-diamate-bright-blue font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Berlangganan
                </button>
              </form>
              <p className="mt-4 text-sm opacity-75">
                Kami menghormati privasi Anda. Anda dapat berhenti berlangganan kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Blog;
