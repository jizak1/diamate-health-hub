
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const FaktorRisikoDiabetes = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 pt-8 md:pt-10">
        {/* Hero Section */}
        <section id="hero-blog1" className="relative">
          <div className="bg-gradient-blog-hero py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Memahami Faktor Risiko Diabetes Tipe 2</h1>
                <div className="flex items-center justify-center text-diamate-medium-gray mb-6">
                  <span>12 Mei 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 menit membaca</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 -mt-8">
            <img
              src="/blog/faktor-risiko-hero.jpg"
              alt="Faktor Risiko Diabetes"
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-diamate-medium-gray mb-8">
                Diabetes tipe 2 adalah kondisi kronis yang mempengaruhi cara tubuh memetabolisme gula. Mengenali faktor risiko adalah langkah penting dalam pencegahan dan pengelolaan kondisi ini.
              </p>

              <section id="konten-blog1" className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Faktor Risiko Diabetes Tipe 2</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Kelebihan berat badan dan obesitas</li>
                      <li>Pola makan tidak sehat dengan tinggi gula dan lemak</li>
                      <li>Kurangnya aktivitas fisik</li>
                      <li>Riwayat keluarga dengan diabetes</li>
                      <li>Usia di atas 45 tahun</li>
                      <li>Riwayat diabetes gestasional</li>
                      <li>Kondisi prediabetes</li>
                      <li>Sindrom ovarium polikistik</li>
                      <li>Area perut/pinggang yang besar</li>
                      <li>Etnis tertentu (Asia, Hispanik, Afrika)</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/blog/risk-factors.jpg"
                      alt="Ilustrasi Faktor Risiko"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </section>

              <div className="my-12 p-6 bg-diamate-soft-blue rounded-lg border-l-4 border-diamate-bright-blue">
                <p className="text-xl font-medium">
                  "Menurunkan 5–10% berat badan dan meningkatkan aktivitas fisik dapat mengurangi risiko diabetes tipe 2 hingga 58%."
                </p>
                <p className="mt-2 text-diamate-medium-gray">— American Diabetes Association</p>
              </div>

              <section id="mod-nonmod-blog1" className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Pengelompokan Faktor Risiko</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glassmorphic p-6">
                    <h3 className="text-xl font-medium mb-4 text-diamate-bright-blue">Faktor Risiko yang Dapat Dimodifikasi</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Berat badan dan obesitas</li>
                      <li>Pola makan tidak sehat</li>
                      <li>Kurangnya aktivitas fisik</li>
                      <li>Merokok</li>
                      <li>Konsumsi alkohol berlebihan</li>
                      <li>Stres kronis</li>
                      <li>Kurang tidur</li>
                    </ul>
                    <p className="mt-4 text-diamate-medium-gray">
                      Faktor-faktor ini dapat diubah melalui modifikasi gaya hidup dan kebiasaan sehari-hari.
                    </p>
                  </div>

                  <div className="glassmorphic p-6">
                    <h3 className="text-xl font-medium mb-4 text-diamate-secondary-purple">Faktor Risiko yang Tidak Dapat Dimodifikasi</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Genetik dan riwayat keluarga</li>
                      <li>Usia</li>
                      <li>Etnis</li>
                      <li>Riwayat diabetes gestasional</li>
                      <li>Riwayat medis tertentu</li>
                    </ul>
                    <p className="mt-4 text-diamate-medium-gray">
                      Meskipun faktor-faktor ini tidak dapat diubah, menyadarinya membantu dalam memahami risiko personal dan mengambil langkah pencegahan yang tepat.
                    </p>
                  </div>
                </div>
              </section>

              <h2 className="text-2xl font-semibold mb-4">Pencegahan Diabetes Tipe 2</h2>
              <p>
                Meskipun beberapa faktor risiko tidak dapat diubah, banyak langkah yang dapat diambil untuk mencegah atau menunda onset diabetes tipe 2:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li>Menurunkan berat badan jika kelebihan berat badan</li>
                <li>Mengikuti pola makan sehat dengan banyak buah, sayuran, dan biji-bijian</li>
                <li>Berolahraga secara teratur, minimal 150 menit per minggu</li>
                <li>Berhenti merokok jika Anda perokok</li>
                <li>Mengelola stres</li>
                <li>Memantau kadar gula darah secara teratur, terutama jika berisiko tinggi</li>
              </ul>
              <p>
                Dengan memahami faktor risiko dan mengambil langkah pencegahan yang tepat, kita dapat menurunkan risiko terkena diabetes tipe 2 secara signifikan, atau mengelolanya dengan lebih efektif jika sudah terdiagnosis.
              </p>

              {/* Read Next Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Baca Selanjutnya</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Link to="/blog/ai-dalam-kesehatan" className="blog-card">
                    <img
                      src="/blog/ai-health.jpg"
                      alt="AI dalam Kesehatan"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold hover:text-diamate-blue transition-colors">
                        AI dalam Layanan Kesehatan, Masa Depan
                      </h4>
                      <p className="text-diamate-medium-gray mt-2">
                        Menjelajahi bagaimana teknologi kecerdasan buatan sedang merevolusi deteksi dini dan pengobatan diabetes.
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

export default FaktorRisikoDiabetes;
