import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Image, Share2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-charcoal/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-golden/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-golden/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-charcoal-light/50 border border-golden/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-golden" />
            <span className="text-sm font-medium text-golden">AI-Powered Content Creation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Create{" "}
            <span className="bg-gradient-to-r from-golden via-golden-light to-emerald bg-clip-text text-transparent">
              Stunning
            </span>
            <br />
            Social Media Posts
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Design professional social media content with AI-powered captions, smart compression, 
            and multi-platform export. Transform your ideas into viral-ready posts in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/signup">
              <Button className="btn-hero text-lg px-8 py-4">
                Start Creating Free
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="btn-ghost text-lg px-8 py-4">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-gradient-to-br from-golden/20 to-golden/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-golden" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AI Captions</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-gradient-to-br from-emerald/20 to-emerald/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Image className="h-8 w-8 text-emerald" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Smart Compression</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-gradient-to-br from-golden/20 to-emerald/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Share2 className="h-8 w-8 text-golden" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Multi-Platform</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-gradient-to-br from-emerald/20 to-golden/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-emerald" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Quick Export</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;