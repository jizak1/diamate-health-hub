
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const GayaHidupSehat = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        {/* Hero Section */}
        <section id="hero-blog2" className="bg-diamate-bright-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Perubahan Gaya Hidup untuk Pencegahan Diabetes</h1>
              <p className="text-xl opacity-90 mb-6">
                Langkah-langkah sederhana namun efektif untuk mengurangi risiko diabetes Anda
              </p>
              <div className="flex items-center justify-center text-white/80">
                <span>5 Mei 2023</span>
                <span className="mx-2">•</span>
                <span>7 menit membaca</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <section id="intro-blog2" className="mb-12">
                <p className="text-xl">
                  Mencegah diabetes tipe 2 tidak selalu membutuhkan perubahan drastis dalam kehidupan Anda. Seringkali, modifikasi kecil namun konsisten dalam gaya hidup sehari-hari dapat memberikan dampak besar pada kesehatan Anda jangka panjang.
                </p>
                <p className="mt-4">
                  Dalam artikel ini, kita akan membahas tiga pilar utama gaya hidup sehat untuk pencegahan diabetes: pola makan seimbang, aktivitas fisik teratur, dan manajemen stres serta pola tidur.
                </p>
              </section>

              <section className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Pola Makan Seimbang</h2>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/2">
                    <img
                      src="/blog/healthy-eating.jpg"
                      alt="Makanan Sehat"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-medium mb-3">Prinsip Makanan Seimbang</h3>
                    <p>
                      Pola makan seimbang tidak berarti mengeliminasi semua makanan favorit Anda. Kuncinya adalah keseimbangan, porsi, dan pilihan cerdas:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li>Prioritaskan sayuran, buah-buahan, dan biji-bijian utuh</li>
                      <li>Pilih protein tanpa lemak seperti ikan, daging tanpa lemak, dan kacang-kacangan</li>
                      <li>Batasi gula tambahan dan karbohidrat olahan</li>
                      <li>Perhatikan ukuran porsi makan</li>
                      <li>Konsumsi lemak sehat seperti minyak zaitun dan alpukat</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-diamate-soft-blue p-6 rounded-lg my-12">
                <p className="text-lg font-medium text-diamate-dark-gray">
                  "Menurunkan berat badan sebesar 5-7% dan berolahraga sedang selama 150 menit per minggu dapat mengurangi risiko diabetes hingga 58% pada orang dengan prediabetes."
                </p>
                <p className="mt-2 text-diamate-medium-gray">— Centers for Disease Control and Prevention</p>
              </div>

              <section className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Aktivitas Fisik Teratur</h2>
                <div className="flex flex-col md:flex-row-reverse gap-8 mb-8">
                  <div className="md:w-1/2">
                    <img
                      src="/blog/physical-activity.jpg"
                      alt="Aktivitas Fisik"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-medium mb-3">Membangun Rutinitas Aktif</h3>
                    <p>
                      Aktivitas fisik tidak harus berarti berjam-jam di gym. Berikut beberapa cara untuk meningkatkan aktivitas harian:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li>Targetkan minimal 30 menit aktivitas sedang per hari, 5 hari seminggu</li>
                      <li>Gabungkan latihan kardio dan latihan kekuatan</li>
                      <li>Pilih aktivitas yang Anda nikmati untuk memastikan konsistensi</li>
                      <li>Mulai dengan target kecil dan tingkatkan secara bertahap</li>
                      <li>Sisipkan aktivitas lebih banyak dalam rutinitas sehari-hari (gunakan tangga, parkir lebih jauh)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="my-12">
                <h2 className="text-2xl font-semibold mb-6">Manajemen Stres & Pola Tidur</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <img
                      src="/blog/stress-sleep.jpg"
                      alt="Manajemen Stres dan Tidur"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-medium mb-3">Pentingnya Tidur dan Relaksasi</h3>
                    <p>
                      Stres kronis dan kurang tidur dapat meningkatkan risiko diabetes dengan mempengaruhi kadar glukosa dan insulin:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li>Targetkan 7-8 jam tidur berkualitas setiap malam</li>
                      <li>Praktikkan teknik relaksasi seperti meditasi atau pernapasan dalam</li>
                      <li>Ciptakan rutinitas tidur yang konsisten</li>
                      <li>Batasi penggunaan layar sebelum tidur</li>
                      <li>Pertimbangkan aktivitas seperti yoga yang menggabungkan gerakan dan meditasi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <h2 className="text-2xl font-semibold mb-6">Tips Praktis untuk Memulai</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Mulai dengan Perubahan Kecil</h3>
                  <p>Tetapkan satu kebiasaan baru setiap minggu daripada mengubah semuanya sekaligus. Misalnya, mulailah dengan berjalan 10 menit setiap hari.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Lacak Kemajuan Anda</h3>
                  <p>Gunakan jurnal atau aplikasi untuk memantau makanan, aktivitas, dan bagaimana perasaan Anda. Data ini dapat membantu identifikasi pola dan area yang perlu ditingkatkan.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Cari Dukungan</h3>
                  <p>Bagikan tujuan Anda dengan orang-orang terdekat, atau pertimbangkan untuk bergabung dengan grup dukungan. Akuntabilitas meningkatkan peluang sukses.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-diamate-soft-blue rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-diamate-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Rayakan Keberhasilan</h3>
                  <p>Berikan hadiah non-makanan pada diri sendiri ketika mencapai target. Pengakuan positif membantu mempertahankan motivasi jangka panjang.</p>
                </div>
              </div>

              <p className="mt-8">
                Yang terpenting, ingat bahwa perubahan gaya hidup adalah perjalanan jangka panjang, bukan tujuan akhir. Fokus pada kemajuan daripada kesempurnaan, dan kembalilah ke jalur jika Anda keluar dari jalur. Bahkan perubahan kecil yang konsisten dapat membawa perbedaan besar dalam risiko diabetes Anda.
              </p>

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

export default GayaHidupSehat;
