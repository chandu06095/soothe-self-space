
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const HealingJournal = () => {
  const navigate = useNavigate();
  const [journalText, setJournalText] = useState("");
  const [gratitudeText, setGratitudeText] = useState("");
  const [savedJournal, setSavedJournal] = useState("None");
  const [savedGratitude, setSavedGratitude] = useState("None");

  useEffect(() => {
    loadSavedNotes();
  }, []);

  const saveJournal = () => {
    if (journalText.trim()) {
      localStorage.setItem("heartJournal", journalText);
      loadSavedNotes();
      toast.success("Journal saved 💗");
      setJournalText("");
    }
  };

  const saveGratitude = () => {
    if (gratitudeText.trim()) {
      localStorage.setItem("heartGratitude", gratitudeText);
      loadSavedNotes();
      toast.success("Gratitude saved 🙏");
      setGratitudeText("");
    }
  };

  const loadSavedNotes = () => {
    const journal = localStorage.getItem("heartJournal") || "None";
    const gratitude = localStorage.getItem("heartGratitude") || "None";
    setSavedJournal(journal);
    setSavedGratitude(gratitude);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-6 animate-fade-in">
          📝 Healing Journal
        </h2>

        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600">Write what you wish you had said...</h3>
            <p className="text-gray-600 mb-4 italic">Dear me...</p>
            <Textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Dear me..."
              className="mb-4 h-32"
            />
            <Button onClick={saveJournal} className="bg-pink-600 hover:bg-pink-700">
              Save Journal
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2 text-pink-600">🙏 Gratitude Notes</h3>
            <p className="text-gray-600 mb-4 italic">Things I'm thankful for today…</p>
            <Textarea
              value={gratitudeText}
              onChange={(e) => setGratitudeText(e.target.value)}
              placeholder="I'm grateful for..."
              className="mb-4 h-32"
            />
            <Button onClick={saveGratitude} className="bg-pink-600 hover:bg-pink-700">
              Save Gratitude
            </Button>
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl text-left animate-fade-in">
            <p className="font-bold text-lg mb-4 text-center">💾 Saved Thoughts:</p>
            <div className="space-y-2">
              <p><strong>Journal:</strong> <span className="text-gray-700">{savedJournal}</span></p>
              <p><strong>Gratitude:</strong> <span className="text-gray-700">{savedGratitude}</span></p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => navigate('/girl-power-wall')}
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 mt-8"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default HealingJournal;
