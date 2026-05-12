import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import {
  NutritionalTherapyPage,
  PsychologicalCoachingPage,
  RapidReliefHomeopathyPage,
} from "./pages/ServicePage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/nutritional-therapy"} component={NutritionalTherapyPage} />
      <Route path={"/psychological-coaching"} component={PsychologicalCoachingPage} />
      <Route path={"/rapid-relief-homeopathy-rrh"} component={RapidReliefHomeopathyPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - Contemporary Organic Editorial uses a light ivory foundation with cacao text, sage action states, muted honey warmth, and spacious editorial sections.
// - Keep the default light theme aligned with the global CSS tokens so service landing pages and the homepage share one coherent wellness identity.

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
