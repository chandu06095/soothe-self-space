
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-pink-100 to-rose-100 flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold text-pink-600 mb-6 animate-fade-in">
          💖 Heart Healer 💖
        </h1>
        <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          A healing space for broken hearts.
        </p>
        <div className="text-8xl mb-8 animate-pulse">❤️</div>
        <button
          onClick={() => navigate('/healing-activities')}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          Start Healing
        </button>
      </div>
    </div>
  );
};

export default Index;
