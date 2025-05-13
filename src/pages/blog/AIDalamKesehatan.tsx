
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const AIDalamKesehatan = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="mt-20">
        {/* Hero Section */}
        <section id="hero-blog3" className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">AI dalam Layanan Kesehatan, Masa Depan</h1>
              <p className="text-xl opacity-90 mb-6">
                Bagaimana kecerdasan buatan mengubah cara kita mendeteksi, mencegah, dan mengelola diabetes
              </p>
              <div className="flex items-center justify-center text-white/80">
                <span>28 April 2023</span>
                <span className="mx-2">•</span>
                <span>8 menit membaca</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <section id="intro-blog3" className="mb-12">
                <p className="text-xl">
                  Teknologi kecerdasan buatan (AI) sedang mengubah lanskap perawatan kesehatan secara dramatis, terutama dalam pengelolaan dan pencegahan penyakit kronis seperti diabetes. Dengan kemampuan untuk menganalisis data dalam jumlah besar dan menemukan pola yang mungkin terlewatkan oleh pengamatan manusia, AI menjanjikan era baru perawatan yang lebih personal, proaktif, dan efektif.
                </p>
                <p className="mt-4">
                  Di DiaMate, kami berada di garis depan revolusi ini, menggunakan teknologi AI canggih untuk membantu mengidentifikasi risiko diabetes lebih awal dan memberikan rekomendasi yang dipersonalisasi untuk setiap individu. Artikel ini akan menjelajahi bagaimana AI sedang mengubah perawatan diabetes dan apa yang bisa kita harapkan di masa depan.
                </p>
              </section>

              <section id="applications" className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Aplikasi AI dalam Perawatan Diabetes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glassmorphic p-6">
                    <div className="w-16 h-16 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Diagnostik Dini</h3>
                    <p className="text-diamate-medium-gray">
                      Algoritma AI dapat mengidentifikasi pola yang menunjukkan risiko diabetes, bahkan sebelum gejala muncul, melalui analisis data kesehatan yang komprehensif.
                    </p>
                  </div>
                  
                  <div className="glassmorphic p-6">
                    <div className="w-16 h-16 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Pengobatan Personal</h3>
                    <p className="text-diamate-medium-gray">
                      AI memungkinkan pendekatan pengobatan yang disesuaikan dengan kebutuhan individu, mempertimbangkan genetik, gaya hidup, dan riwayat medis.
                    </p>
                  </div>
                  
                  <div className="glassmorphic p-6">
                    <div className="w-16 h-16 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Pemantauan Jarak Jauh</h3>
                    <p className="text-diamate-medium-gray">
                      Sistem berbasis AI memungkinkan pemantauan glukosa dan parameter kesehatan lainnya secara real-time, memberikan peringatan dini dan intervensi tepat waktu.
                    </p>
                  </div>
                </div>
              </section>

              <section id="future" className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Masa Depan AI dalam Perawatan Diabetes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Inovasi yang Sedang Berkembang</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        <span className="font-medium">Sistem Pankreas Buatan:</span> AI yang mengelola pemberian insulin secara otomatis berdasarkan data glukosa real-time.
                      </li>
                      <li>
                        <span className="font-medium">Penglihatan Komputer untuk Retinopati:</span> Diagnosa komplikasi mata diabetes lebih awal menggunakan algoritma penglihatan komputer.
                      </li>
                      <li>
                        <span className="font-medium">Prediksi Hipoglikemia:</span> Sistem yang dapat memprediksi episode gula darah rendah sebelum terjadi, memungkinkan tindakan pencegahan.
                      </li>
                      <li>
                        <span className="font-medium">Asisten Kesehatan Virtual:</span> Chatbot berbasis AI yang memberikan dukungan dan edukasi diabetes 24/7.
                      </li>
                      <li>
                        <span className="font-medium">Analisis Genom:</span> Prediksi risiko diabetes dan respons obat berdasarkan profil genetik.
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/blog/ai-future.jpg" alt="Masa Depan AI dalam Kesehatan" className="rounded-lg shadow-md" />
                  </div>
                </div>
              </section>

              <section id="ethics" className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Pertimbangan Etis dalam AI Kesehatan</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between ${
                        openAccordion === "privacy" ? "bg-diamate-soft-blue" : "bg-white"
                      }`}
                      onClick={() => toggleAccordion("privacy")}
                    >
                      <span>Privasi dan Keamanan Data</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          openAccordion === "privacy" ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`px-6 py-4 bg-white transition-all duration-300 ${
                        openAccordion === "privacy" ? "block" : "hidden"
                      }`}
                    >
                      <p>
                        Dengan meningkatnya pengumpulan dan penggunaan data kesehatan sensitif, perlindungan privasi dan keamanan menjadi sangat penting. Sistem AI harus mematuhi regulasi seperti HIPAA dan GDPR, menggunakan enkripsi data yang kuat, dan memberikan transparansi kepada pengguna tentang bagaimana data mereka digunakan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between ${
                        openAccordion === "bias" ? "bg-diamate-soft-blue" : "bg-white"
                      }`}
                      onClick={() => toggleAccordion("bias")}
                    >
                      <span>Bias dan Kesetaraan</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          openAccordion === "bias" ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`px-6 py-4 bg-white transition-all duration-300 ${
                        openAccordion === "bias" ? "block" : "hidden"
                      }`}
                    >
                      <p>
                        Algoritma AI dapat mewarisi bias dari data pelatihan, yang berpotensi memperkuat disparitas kesehatan yang sudah ada. Penting untuk memastikan bahwa sistem dikembangkan dengan data yang beragam dan inklusif, dan secara teratur diaudit untuk bias.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between ${
                        openAccordion === "human" ? "bg-diamate-soft-blue" : "bg-white"
                      }`}
                      onClick={() => toggleAccordion("human")}
                    >
                      <span>Elemen Manusia dalam Perawatan Kesehatan</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          openAccordion === "human" ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`px-6 py-4 bg-white transition-all duration-300 ${
                        openAccordion === "human" ? "block" : "hidden"
                      }`}
                    >
                      <p>
                        Meskipun AI dapat meningkatkan efisiensi dan akurasi diagnosis, penting untuk mempertahankan elemen manusia dalam perawatan kesehatan. AI harus dilihat sebagai alat untuk membantu penyedia layanan kesehatan, bukan menggantikan interaksi manusia yang sangat penting dalam perawatan pasien.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="glassmorphic p-6 my-12">
                <h3 className="text-xl font-semibold mb-3">Kesimpulan</h3>
                <p>
                  AI membuka era baru dalam perawatan diabetes, menawarkan potesi untuk deteksi dini, pengobatan yang dipersonalisasi, dan manajemen penyakit yang lebih baik. Di DiaMate, kami berkomitmen untuk memanfaatkan kekuatan teknologi ini sambil tetap memprioritaskan privasi, kesetaraan, dan perawatan yang berpusat pada manusia.
                </p>
                <p className="mt-4">
                  Dengan pendekatan yang seimbang antara inovasi teknologi dan pertimbangan etis, AI dapat benar-benar mengubah cara kita mencegah dan mengelola diabetes, meningkatkan kualitas hidup jutaan orang di seluruh dunia.
                </p>
              </div>

              {/* Read Next Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Baca Selanjutnya</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/blog/faktor-risiko-diabetes" className="blog-card">
                    <img
                      src="/blog/faktor-risiko.jpg"
                      alt="Faktor Risiko Diabetes"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold hover:text-diamate-blue transition-colors">
                        Memahami Faktor Risiko Diabetes Tipe 2
                      </h4>
                      <p className="text-diamate-medium-gray mt-2">
                        Pahami berbagai faktor risiko diabetes seperti genetik, pola makan, dan bagaimana mengelolanya secara efektif.
                      </p>
                    </div>
                  </Link>
                  <Link to="/blog/gaya-hidup-sehat" className="blog-card">
                    <img
                      src="/blog/gaya-hidup.jpg"
                      alt="Gaya Hidup Sehat"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold hover:text-diamate-blue transition-colors">
                        Perubahan Gaya Hidup untuk Pencegahan
                      </h4>
                      <p className="text-diamate-medium-gray mt-2">
                        Modifikasi gaya hidup sederhana namun efektif yang dapat membantu mengurangi risiko diabetes Anda.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default AIDalamKesehatan;
