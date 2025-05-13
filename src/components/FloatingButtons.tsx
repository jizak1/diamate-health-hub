
import { useState } from "react";

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'bot', content: string}[]>([
    { type: 'bot', content: 'Hai! Ada yang bisa kami bantu tentang diabetes?' }
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { type: 'user', content: message }]);

    // Simulate bot response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          type: 'bot', 
          content: 'Terima kasih atas pertanyaan Anda. Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut tentang diabetes.' 
        }
      ]);
    }, 1000);

    setMessage("");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-diamate-whatsapp-green shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Konsultasi via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
        <span className="absolute top-0 -left-2 bg-white text-diamate-whatsapp-green text-xs font-bold px-2 py-1 rounded-full">
          Chat
        </span>
      </a>

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-16 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-diamate-bright-blue shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Chat with DiaMate"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isChatOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          )}
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-32 right-6 w-80 sm:w-96 z-40 bg-white rounded-xl shadow-2xl transition-all duration-300 transform ${
          isChatOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-diamate-bright-blue text-white p-4 rounded-t-xl">
          <h3 className="font-semibold text-lg">DiaMate Chat</h3>
          <p className="text-sm text-white/80">Kami siap membantu Anda</p>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 space-y-3">
          {chatMessages.map((msg, index) => (
            <div 
              key={index} 
              className={`${
                msg.type === 'user' 
                  ? 'ml-auto bg-diamate-soft-blue text-diamate-bright-blue' 
                  : 'mr-auto bg-gray-100 text-gray-800'
              } rounded-lg p-3 max-w-[80%]`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="border-t p-3 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ketik pesan Anda..."
            className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-diamate-blue"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-diamate-bright-blue text-white rounded-r-lg hover:bg-diamate-blue transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default FloatingButtons;
