
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="DiaMate Logo" className="h-10" />
            <span className="ml-2 text-xl font-poppins font-bold text-diamate-bright-blue">DiaMate</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center text-gray-700 focus:outline-none">
                <span className="mr-2">John Doe</span>
                <img
                  src="/profile-placeholder.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="text-diamate-medium-gray hover:text-diamate-dark-gray transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Selamat Datang di Dashboard DiaMate</h1>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === "overview"
                  ? "border-diamate-bright-blue text-diamate-bright-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors`}
            >
              Ringkasan
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === "data"
                  ? "border-diamate-bright-blue text-diamate-bright-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors`}
            >
              Data Kesehatan
            </button>
            <button
              onClick={() => setActiveTab("recommendations")}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === "recommendations"
                  ? "border-diamate-bright-blue text-diamate-bright-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors`}
            >
              Rekomendasi
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === "profile"
                  ? "border-diamate-bright-blue text-diamate-bright-blue"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors`}
            >
              Profil
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Risiko Diabetes</h3>
                <span className="text-green-600 font-medium">Rendah</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: "15%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Berdasarkan data Anda, risiko diabetes Anda saat ini tergolong rendah. Pertahankan gaya hidup sehat Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Aktivitas Fisik</h3>
                <span className="text-yellow-600 font-medium">Sedang</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "55%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Tingkat aktivitas fisik Anda cukup baik. Tingkatkan dengan menambahkan 30 menit olahraga intensitas sedang setiap hari.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Pola Makan</h3>
                <span className="text-blue-600 font-medium">Baik</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Pola makan Anda sudah cukup baik. Perhatikan konsumsi karbohidrat dan gula untuk hasil yang lebih baik.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Tren Glukosa Darah</h3>
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                <p className="text-gray-500">Data grafik akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "data" && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Data Kesehatan Anda</h3>
            <p className="text-gray-600">
              Halaman ini akan menampilkan data kesehatan lengkap Anda. Fitur ini masih dalam pengembangan.
            </p>
          </div>
        )}

        {activeTab === "recommendations" && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Rekomendasi Pribadi</h3>
            <p className="text-gray-600">
              Halaman ini akan menampilkan rekomendasi kesehatan yang dipersonalisasi untuk Anda. Fitur ini masih dalam pengembangan.
            </p>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Profil Anda</h3>
            <p className="text-gray-600">
              Halaman ini akan menampilkan dan memungkinkan Anda mengedit informasi profil. Fitur ini masih dalam pengembangan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
