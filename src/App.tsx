
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HealingActivities from "./pages/HealingActivities";
import HealingJournal from "./pages/HealingJournal";
import GirlPowerWall from "./pages/GirlPowerWall";
import BreakTheHeart from "./pages/BreakTheHeart";
import GlowUpTime from "./pages/GlowUpTime";
import MusicTherapy from "./pages/MusicTherapy";
import SelfCareTips from "./pages/SelfCareTips";
import HeartBotChat from "./pages/HeartBotChat";
import Celebration from "./pages/Celebration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/healing-activities" element={<HealingActivities />} />
          <Route path="/healing-journal" element={<HealingJournal />} />
          <Route path="/girl-power-wall" element={<GirlPowerWall />} />
          <Route path="/break-the-heart" element={<BreakTheHeart />} />
          <Route path="/glow-up-time" element={<GlowUpTime />} />
          <Route path="/music-therapy" element={<MusicTherapy />} />
          <Route path="/self-care-tips" element={<SelfCareTips />} />
          <Route path="/heartbot-chat" element={<HeartBotChat />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
