
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Pendaftaran berhasil!",
        description: "Akun Anda telah dibuat. Selamat datang di DiaMate.",
      });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero bg-opacity-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <Link to="/" className="inline-flex items-center justify-center">
              <img src="/logo.svg" alt="DiaMate Logo" className="h-12" />
              <span className="ml-2 text-2xl font-poppins font-bold text-diamate-bright-blue">DiaMate</span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Buat Akun Baru</h2>
            <p className="mt-2 text-sm text-gray-600">
              Atau{" "}
              <Link to="/login" className="font-medium text-diamate-bright-blue hover:text-diamate-blue">
                masuk ke akun yang sudah ada
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md -space-y-px">
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-diamate-blue focus:border-diamate-blue focus:z-10"
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Alamat Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-diamate-blue focus:border-diamate-blue focus:z-10"
                  placeholder="Alamat Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-diamate-blue focus:border-diamate-blue focus:z-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-diamate-bright-blue focus:ring-diamate-blue border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                Saya setuju dengan{" "}
                <a href="#" className="font-medium text-diamate-bright-blue hover:text-diamate-blue">
                  Syarat dan Ketentuan
                </a>{" "}
                serta{" "}
                <a href="#" className="font-medium text-diamate-bright-blue hover:text-diamate-blue">
                  Kebijakan Privasi
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg font-medium text-white bg-gradient-cta focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-diamate-blue transition-all duration-300 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:scale-105"
                }`}
              >
                {isLoading ? "Mendaftar..." : "Daftar Sekarang"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau daftar dengan</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-1.33-6.36-1.32-.27 0-.54 0-.82-.01C9.04 15.5 7.47 15.57 7 15c-.1-.91-.35-4.28 1.5-6.5 2-2.38 5.95-2.4 6.66-1.09.7 1.29-1.39 4.91-1.89 5.83-.56 1.04 0 2.11.71 2.4.74.3 1.9-.21 2.02-.28.75-.4 1.54-1.24 1.98-1.83.44-.59.69-1.7.21-2.52-.59-1.01-1.78-1.26-2.13-1.3-.39-.04-1.22.25-1.22.25.67-1.58 2.43-1.95 3.5-1.77 1.17.2 2.32 1.01 2.75 2.5.23.83 0 3.24-2.6 4.78.32.16.66.29 1.02.41a9.5 9.5 0 01-3.74 2.84 9.41 9.41 0 01-4.09.9c-5.22 0-9.5-4.28-9.5-9.5a9.5 9.5 0 014.43-8.07A9.41 9.41 0 0112 2.5c5.22 0 9.5 4.28 9.5 9.5 0 1.84-.54 3.56-1.47 5.03.28-.36.53-.73.73-1.13.81-1.63.55-3.43-.04-4.44-.45-.7-1.05-1.04-1.64-1.21.56-.1 1.14-.15 1.73-.15 5.22 0 9.45 4.23 9.45 9.45s-4.23 9.45-9.45 9.45a9.45 9.45 0 01-2.68-.39z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
