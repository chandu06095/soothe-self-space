
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const girlQuotes = [
  "You are enough just as you are.",
  "A queen doesn't need a king to rule.",
  "Fall in love with yourself first.",
  "He left, but your glow stayed.",
  "You are not a backup plan. You are the whole damn story.",
  "Your heart is a garden, not a battlefield.",
  "Strong women rise from broken pieces.",
  "Self-worth isn't found in someone else's validation.",
  "Don't cry for him, smile for you.",
  "Confidence is the best revenge.",
  "You heal, you grow, you glow.",
  "Slay your pain with style 💅",
  "You're the author of your happy ending.",
  "Broken crayons still color beautifully.",
  "He lost a diamond. You just dropped a pebble.",
  "Heartbreak is a plot twist, not the end.",
  "You're magic, not made to be tamed.",
  "Stop chasing. Start choosing.",
  "One day you'll thank the goodbye.",
  "The best comeback is living well."
];

const girlStories = [
  "✨ Riya was dumped right before her graduation. Instead of falling apart, she started a YouTube channel about student wellness — today she's a paid speaker and advocate for mental health.",
  "🌟 After Priya's 4-year relationship ended, she traveled solo, learned to code, and now works at a tech startup. Her favorite quote? 'He left, so I could find myself.'"
];

const GirlPowerWall = () => {
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState("Click below for motivation 👇");
  const [currentStory, setCurrentStory] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  const nextMotivation = () => {
    setCurrentQuote(girlQuotes[quoteIndex]);
    setQuoteIndex((quoteIndex + 1) % girlQuotes.length);
  };

  const nextStory = () => {
    setCurrentStory(girlStories[storyIndex]);
    setStoryIndex((storyIndex + 1) % girlStories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-pink-700 mb-8 animate-fade-in">
          👑 Girl Power Wall
        </h2>

        <div className="space-y-8">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-fade-in">
            <p className="text-xl text-gray-700 mb-6 min-h-[60px] flex items-center justify-center">
              {currentQuote}
            </p>
            <Button onClick={nextMotivation} className="bg-pink-600 hover:bg-pink-700">
              Next Quote
            </Button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">💬 Real Story</h3>
            <p className="text-lg text-gray-700 mb-6 min-h-[80px] flex items-center justify-center">
              {currentStory || "Click below to read inspiring stories"}
            </p>
            <Button onClick={nextStory} className="bg-pink-600 hover:bg-pink-700">
              Next Story
            </Button>
          </div>
        </div>

        <Button
          onClick={() => navigate('/break-the-heart')}
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 mt-8"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default GirlPowerWall;
