import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Zap, 
  Image, 
  Share2, 
  Palette, 
  Download,
  Users,
  Star,
  CheckCircle
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Captions",
      description: "Generate engaging captions automatically with our advanced AI technology",
      color: "golden"
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Choose from hundreds of designer-made templates for every occasion",
      color: "emerald"
    },
    {
      icon: Image,
      title: "Smart Compression",
      description: "Optimize your images for faster loading without quality loss",
      color: "golden"
    },
    {
      icon: Share2,
      title: "Multi-Platform Export",
      description: "Export your posts in formats optimized for each social platform",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Quick Creation",
      description: "Create professional posts in minutes, not hours",
      color: "golden"
    },
    {
      icon: Download,
      title: "Batch Export",
      description: "Download multiple variations and formats at once",
      color: "emerald"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Social Media Manager",
      company: "TechCorp",
      content: "PostMux has revolutionized our content creation process. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      company: "CreativeHub",
      content: "The AI captions are incredibly accurate and engaging. My engagement rates have increased by 40%.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      company: "StartupXYZ",
      content: "The multi-platform export feature saves us so much time. One design, all platforms perfectly optimized.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Key Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Free{" "}
              <span className="bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
                Social Media Creator
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Create, manage, and share your social media posts with our completely free platform.
              No hidden costs, no premium features - everything you need is included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-feature group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-golden/20 to-golden/10">
                  <Sparkles className="h-6 w-6 text-golden" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Create Posts</h3>
                <p className="text-sm text-muted-foreground">Design beautiful posts with AI assistance</p>
              </CardContent>
            </Card>
            
            <Card className="card-feature group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-emerald/20 to-emerald/10">
                  <Users className="h-6 w-6 text-emerald" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">View & Manage</h3>
                <p className="text-sm text-muted-foreground">Organize all your content in one place</p>
              </CardContent>
            </Card>
            
            <Card className="card-feature group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-golden/20 to-emerald/20">
                  <Share2 className="h-6 w-6 text-golden" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Share Instantly</h3>
                <p className="text-sm text-muted-foreground">Export and share across all platforms</p>
              </CardContent>
            </Card>
            
            <Card className="card-feature group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-emerald/20 to-golden/10">
                  <Palette className="h-6 w-6 text-emerald" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Full Control</h3>
                <p className="text-sm text-muted-foreground">Edit, delete, and organize as needed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Create in{" "}
              <span className="bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-golden/20 to-golden/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-golden">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Template</h3>
              <p className="text-muted-foreground">
                Select from our library of professional templates or start from scratch
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald/20 to-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customize & Generate</h3>
              <p className="text-muted-foreground">
                Add your content and let AI generate engaging captions for you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-golden/20 to-emerald/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-golden">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Export & Share</h3>
              <p className="text-muted-foreground">
                Download optimized versions for all your social media platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
                Creators Worldwide
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
              Social Media Game?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using PostMux to create stunning content 
            that drives engagement and grows their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button className="btn-hero text-lg px-8 py-4">
                Start Creating for Free
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-emerald" />
              <span>100% Free Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-golden to-emerald p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-charcoal" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
                PostMux
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 PostMux. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;