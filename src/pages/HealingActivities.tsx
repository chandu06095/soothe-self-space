
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const HealingActivities = () => {
  const navigate = useNavigate();
  const [journalText, setJournalText] = useState("");
  const [gratitudeText, setGratitudeText] = useState("");

  const saveJournal = () => {
    if (journalText.trim()) {
      localStorage.setItem("healing_journal", journalText);
      toast.success("📝 Journal saved just for you!");
    }
  };

  const saveGratitude = () => {
    if (gratitudeText.trim()) {
      localStorage.setItem("gratitude_note", gratitudeText);
      toast.success("🙏 Gratitude saved privately!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4 animate-fade-in">
          🌿 Healing Activities 🌈
        </h2>
        <p className="text-lg text-gray-600 mb-8 italic animate-fade-in">
          Let it out. Write it down. Heal it slowly 💌
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">📖 Journal Prompt</h3>
            <p className="text-gray-600 mb-4 italic">"Write what you wish you had said..."</p>
            <Textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Start writing your feelings..."
              className="mb-4 h-32"
            />
            <Button onClick={saveJournal} className="bg-pink-600 hover:bg-pink-700">
              Save Journal
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">🙏 Gratitude Note</h3>
            <p className="text-gray-600 mb-4 italic">"Things I'm thankful for today…"</p>
            <Textarea
              value={gratitudeText}
              onChange={(e) => setGratitudeText(e.target.value)}
              placeholder="Write 1 or 2 good things..."
              className="mb-4 h-32"
            />
            <Button onClick={saveGratitude} className="bg-pink-600 hover:bg-pink-700">
              Save Gratitude
            </Button>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-2xl mb-8 animate-fade-in">
          <h4 className="text-xl font-medium text-purple-600">
            💬 "Every wound is a place where light enters."
          </h4>
        </div>

        <Button
          onClick={() => navigate('/healing-journal')}
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default HealingActivities;
