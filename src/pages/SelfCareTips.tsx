
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const careTips = [
  "Drink a full glass of water 💧",
  "Block him and breathe 😌",
  "Go outside and feel the sun ☀️",
  "Unfollow toxic pages 💻",
  "Write one thing you love about yourself ✍️",
  "Stretch your body for 2 minutes 🧘‍♀️",
  "Put on your favorite lipstick 💄",
  "Message a friend just to smile 📱",
  "Listen to your favorite song 🎧",
  "Take a break from social media 📵",
  "Look in the mirror and say: 'I love you' 💗",
  "Delete old chats that hurt 🗑️",
  "Clean a corner of your room 🧼",
  "Write a future goal and visualize it 🌟",
  "Wear something that makes you feel powerful 👗",
  "Dance like no one's watching 💃",
  "Read a page of a book 📚",
  "Light a scented candle 🕯️",
  "Put your phone down for 30 mins ☁️",
  "Smile at yourself — you made it today 💪"
];

const SelfCareTips = () => {
  const navigate = useNavigate();
  const [currentTip, setCurrentTip] = useState("Your next tip is waiting ✨");

  const showRandomTip = () => {
    const randomTip = careTips[Math.floor(Math.random() * careTips.length)];
    setCurrentTip(randomTip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-purple-700 mb-4 animate-fade-in">
          🧘 Self-Care is Self-Love 💖
        </h2>
        <p className="text-lg text-gray-600 mb-12 italic animate-fade-in">
          Click below for a healing tip...
        </p>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-12 animate-fade-in">
          <p className="text-xl text-gray-700 mb-6 min-h-[80px] flex items-center justify-center">
            {currentTip}
          </p>
          <Button onClick={showRandomTip} className="bg-purple-600 hover:bg-purple-700">
            Next Tip
          </Button>
        </div>

        <Button
          onClick={() => navigate('/heartbot-chat')}
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default SelfCareTips;
