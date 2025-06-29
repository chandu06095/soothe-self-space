
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MusicTherapy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-purple-700 mb-4 animate-fade-in">
          🎶 Music Therapy Zone 🎶
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate-fade-in">
          Dance it out. Heal it out. 💃
        </p>

        <div className="mb-12 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8">
            <div className="text-8xl mb-4 animate-bounce">💃</div>
            <p className="text-lg text-gray-600">Let the music heal your soul</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">🎧 Healing Playlist</h3>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-lg text-white">
              <p className="text-lg mb-2">🎵 Strong - Kelly Clarkson</p>
              <p className="text-lg mb-2">🎵 Confident - Demi Lovato</p>
              <p className="text-lg mb-2">🎵 Stronger - Britney Spears</p>
              <p className="text-lg mb-2">🎵 Fight Song - Rachel Platten</p>
              <p className="text-lg">🎵 Roar - Katy Perry</p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => navigate('/self-care-tips')}
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default MusicTherapy;
