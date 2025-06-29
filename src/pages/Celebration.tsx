
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Celebration = () => {
  const navigate = useNavigate();

  const restartJourney = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-pink-100 via-purple-100 to-blue-100 py-12 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-pink-700 mb-6 animate-scale-in">
          🎉 You Made It Through! 🎉
        </h1>
        <p className="text-xl text-gray-700 mb-4 animate-fade-in">
          You've cried, healed, glowed, danced, and grown.
        </p>
        <p className="text-xl text-gray-700 mb-12 animate-fade-in">
          This is your new beginning. The best is yet to come 💖
        </p>

        <div className="text-4xl mb-12 animate-bounce space-x-2">
          <span>🦋</span>
          <span>💃</span>
          <span>✨</span>
          <span>💄</span>
          <span>👑</span>
          <span>🌈</span>
          <span>🌟</span>
        </div>

        <Button
          onClick={restartJourney}
          className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-4 animate-fade-in"
        >
          🔁 Restart Journey
        </Button>
      </div>
    </div>
  );
};

export default Celebration;
