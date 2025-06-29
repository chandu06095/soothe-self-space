
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const botReplies = [
  "That sounds really hard. I'm proud of you for sharing ❤️",
  "You deserve to be loved gently and without confusion 💖",
  "Take a deep breath. I'm here for you 🌸",
  "You are not alone. You're doing better than you think 💪",
  "Your feelings are valid. Cry if you need to 💧",
  "You've got this. One moment at a time ⏳",
  "Hearts heal. Yours is already trying 💗",
  "You're enough, always 🌈",
  "Let it out. That's how we heal 🕊️",
  "Even pain has a purpose. You'll grow from this 🌱"
];

interface Message {
  text: string;
  isUser: boolean;
}

const HeartBotChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey there! I'm here to listen 💖", isUser: false }
  ]);
  const [inputText, setInputText] = useState("");
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Bot reply after delay
    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMessage = { text: reply, isUser: false };
      setMessages(prev => [...prev, botMessage]);
    }, 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-purple-700 mb-4 animate-fade-in">
          🤖 Your HeartBot
        </h2>
        <p className="text-lg text-gray-600 mb-8 italic animate-fade-in">
          Type your feelings. I'll be here with kind words 💬
        </p>

        <div 
          ref={chatBoxRef}
          className="bg-white rounded-2xl shadow-lg h-80 overflow-y-auto p-6 mb-6 text-left animate-fade-in"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 animate-fade-in ${
                message.isUser ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-pink-100 text-gray-800'
                    : 'bg-blue-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mb-8 animate-fade-in">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Say what's on your mind..."
            className="flex-1"
          />
          <Button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-700">
            Send
          </Button>
        </div>

        <Button
          onClick={() => navigate('/celebration')}
          className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default HeartBotChat;
