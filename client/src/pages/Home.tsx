import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, Zap, BarChart3, Bell, Lightbulb, ArrowRight } from "lucide-react";

/**
 * Design System: Modern Minimalist + Data-Driven
 * - Color Palette: Deep slate blue (#1e3a5f) + Teal (#00d9ff)
 * - Typography: Poppins (bold headings) + Roboto (body text)
 * - Layout: Asymmetric grid with staggered sections
 * - Animations: Smooth scroll-triggered fades and hover effects
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary">Unified Inbox</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition">How It Works</a>
            <a href="#roadmap" className="text-sm font-medium text-foreground hover:text-primary transition">Roadmap</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Extension</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-sm font-semibold text-accent">🚀 MVP Phase 1</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Tame Your Notification Chaos
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Collect notifications from Gmail, LinkedIn, Twitter, and YouTube. Unified Inbox intelligently ranks them so you focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Add to Chrome <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border">
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-delay">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458264294/WWZQP9y6Mya8LY95SvubAn/hero-unified-inbox-mwnvtGxNRKNumn3hj3MnAy.webp"
              alt="Notification chaos to organized inbox"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <p className="text-muted-foreground">Notifications per day (average user)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-muted-foreground">Are low-priority or spam</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">Platforms unified in one place</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to reclaim your focus and productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Unified Inbox</h3>
              <p className="text-muted-foreground">
                View notifications from Gmail, LinkedIn, Twitter/X, and YouTube in one centralized dashboard instead of juggling multiple apps.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Intelligent Ranking</h3>
              <p className="text-muted-foreground">
                Automatic categorization into High, Medium, and Low priority based on content, sender importance, and keywords.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Focus Mode</h3>
              <p className="text-muted-foreground">
                Toggle Focus Mode to see only high-priority notifications and eliminate distractions during deep work sessions.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Insights Dashboard</h3>
              <p className="text-muted-foreground">
                Analytics showing notification volume, sources, and patterns to help you understand your digital habits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">How It Works</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-sm font-semibold text-accent">Step 1</span>
                </div>
                <h3 className="text-3xl font-bold text-primary">Install the Extension</h3>
                <p className="text-lg text-muted-foreground">
                  Add Unified Inbox to Chrome in seconds. Grant permissions to access notifications from your favorite platforms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-64 flex items-center justify-center">
                <Download className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl h-64 flex items-center justify-center order-2 md:order-1">
                <Zap className="w-24 h-24 text-accent/30" />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-sm font-semibold text-accent">Step 2</span>
                </div>
                <h3 className="text-3xl font-bold text-primary">Real-Time Collection</h3>
                <p className="text-lg text-muted-foreground">
                  The extension monitors Gmail, LinkedIn, Twitter/X, and YouTube, capturing notifications as they arrive.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-sm font-semibold text-accent">Step 3</span>
                </div>
                <h3 className="text-3xl font-bold text-primary">Smart Ranking</h3>
                <p className="text-lg text-muted-foreground">
                  Our ranking engine normalizes and scores each notification, surfacing what matters most to you first.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-64 flex items-center justify-center">
                <BarChart3 className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">See It In Action</h2>
            <p className="text-lg text-muted-foreground">
              The Unified Inbox popup interface puts all your notifications at your fingertips
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663458264294/WWZQP9y6Mya8LY95SvubAn/dashboard-mockup-mUh9PmXj6FwgKLhBKCA72K.webp"
              alt="Unified Inbox Dashboard"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Future Roadmap</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <Card className="p-8 border-2 border-primary bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold text-primary">Phase 1 (Current)</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Chrome extension MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">DOM scraping for 4 platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Rule-based ranking</span>
                </li>
              </ul>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8 border-2 border-border bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold text-primary">Phase 2 (Impressive)</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ Backend API integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ Worker system with retry logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ Daily digest emails</span>
                </li>
              </ul>
            </Card>

            {/* Phase 3 */}
            <Card className="p-8 border-2 border-border bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold text-primary">Phase 3 (Elite)</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ Personalization engine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ ML-based ranking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">✓ Real-time push notifications</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 md:p-16 text-white">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Reclaim Your Focus?</h2>
              <p className="text-lg mb-8 text-white/90">
                Get started with Unified Inbox in minutes. Install the extension, grant permissions, and start organizing your notifications intelligently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Add to Chrome <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-primary">Unified Inbox</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Intelligent notification management for the modern web.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition">How It Works</a></li>
                <li><a href="#roadmap" className="hover:text-primary transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Unified Inbox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
