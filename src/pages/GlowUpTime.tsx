
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const hairStyles = ["💇‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🎤"];
const makeups = ["😊", "😘", "😍", "😎", "💋"];
const outfits = ["👗", "🕶️👚", "👠👘", "👜👖", "👒👔"];

const glowMessages = [
  "Glow girl, glow! 💅",
  "Serving looks and healing vibes ✨",
  "You're fire 🔥",
  "Who needs him? You got style 💃",
  "This is your era. Own it 👑"
];

const GlowUpTime = () => {
  const navigate = useNavigate();
  const [hairIndex, setHairIndex] = useState(0);
  const [makeupIndex, setMakeupIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [glowMessage, setGlowMessage] = useState("");

  const showGlowMessage = () => {
    const message = glowMessages[Math.floor(Math.random() * glowMessages.length)];
    setGlowMessage(message);
  };

  const nextHair = () => {
    setHairIndex((hairIndex + 1) % hairStyles.length);
    showGlowMessage();
  };

  const nextMakeup = () => {
    setMakeupIndex((makeupIndex + 1) % makeups.length);
    showGlowMessage();
  };

  const nextOutfit = () => {
    setOutfitIndex((outfitIndex + 1) % outfits.length);
    showGlowMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-700 mb-4 animate-fade-in">
          💄 Glow-Up Time 💃
        </h2>
        <p className="text-lg text-gray-600 mb-12 animate-fade-in">
          Tap to switch your look — dress, makeup & hair!
        </p>

        <div className="text-6xl mb-12 animate-fade-in transform hover:scale-110 transition-all duration-300">
          <div className="space-y-2">
            <div>{hairStyles[hairIndex]}</div>
            <div>{makeups[makeupIndex]}</div>
            <div>{outfits[outfitIndex]}</div>
          </div>
        </div>

        <div className="space-x-4 mb-8 animate-fade-in">
          <Button onClick={nextHair} className="bg-pink-600 hover:bg-pink-700">
            Hair
          </Button>
          <Button onClick={nextMakeup} className="bg-pink-600 hover:bg-pink-700">
            Makeup
          </Button>
          <Button onClick={nextOutfit} className="bg-pink-600 hover:bg-pink-700">
            Outfit
          </Button>
        </div>

        {glowMessage && (
          <p className="text-xl text-pink-700 mb-8 italic animate-fade-in min-h-[40px]">
            {glowMessage}
          </p>
        )}

        <Button
          onClick={() => navigate('/music-therapy')}
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default GlowUpTime;
