import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Telephony from "./pages/Telephony";
import ITSupport from "./pages/ITSupport";
import Connectivity from "./pages/Connectivity";
import AISolutions from "./pages/AISolutions";
import Digital from "./pages/Digital";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D1B2A' }}>
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/telephony" component={Telephony} />
          <Route path="/it-support" component={ITSupport} />
          <Route path="/connectivity" component={Connectivity} />
          <Route path="/ai-solutions" component={AISolutions} />
          <Route path="/digital" component={Digital} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
