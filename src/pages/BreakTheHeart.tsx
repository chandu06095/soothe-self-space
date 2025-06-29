
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BreakTheHeart = () => {
  const navigate = useNavigate();
  const [heartBroken, setHeartBroken] = useState(false);
  const [message, setMessage] = useState("");

  const breakHeart = () => {
    setHeartBroken(true);
    setMessage("It's okay to let go. You're one step closer to healing 💖");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-700 mb-4 animate-fade-in">
          💔 Break the Heart 💔
        </h2>
        <p className="text-lg text-gray-600 mb-12 italic animate-fade-in">
          Tap the heart to let it go and heal.
        </p>

        <div className="mb-12 animate-fade-in">
          <div
            onClick={breakHeart}
            className={`text-9xl cursor-pointer transition-all duration-300 inline-block ${
              heartBroken ? 'transform scale-110' : 'animate-pulse hover:scale-110'
            }`}
          >
            {heartBroken ? "💔" : "❤️"}
          </div>
        </div>

        {message && (
          <p className="text-xl text-pink-700 mb-12 animate-fade-in min-h-[60px] flex items-center justify-center">
            {message}
          </p>
        )}

        <Button
          onClick={() => navigate('/glow-up-time')}
          className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default BreakTheHeart;
