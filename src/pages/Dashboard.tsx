import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Sparkles, 
  Image, 
  Download, 
  MoreHorizontal,
  Zap,
  TrendingUp,
  Calendar,
  Share2
} from "lucide-react";

const Dashboard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const recentProjects = [
    {
      id: 1,
      title: "Summer Sale Campaign",
      platform: "Instagram",
      status: "Published",
      lastModified: "2 hours ago",
      thumbnail: "bg-gradient-to-br from-golden/20 to-emerald/20"
    },
    {
      id: 2,
      title: "Product Launch Announcement",
      platform: "LinkedIn",
      status: "Draft",
      lastModified: "1 day ago",
      thumbnail: "bg-gradient-to-br from-emerald/20 to-golden/20"
    },
    {
      id: 3,
      title: "Holiday Special Offer",
      platform: "Facebook",
      status: "Scheduled",
      lastModified: "3 days ago",
      thumbnail: "bg-gradient-to-br from-golden/30 to-emerald/10"
    }
  ];

  const templates = [
    {
      id: 1,
      name: "Instagram Post",
      description: "Perfect for feed posts and stories",
      dimensions: "1080x1080",
      icon: "📸",
      color: "golden"
    },
    {
      id: 2,
      name: "LinkedIn Article",
      description: "Professional content for business",
      dimensions: "1200x627",
      icon: "💼",
      color: "emerald"
    },
    {
      id: 3,
      name: "Facebook Cover",
      description: "Eye-catching cover photos",
      dimensions: "820x312",
      icon: "🎨",
      color: "golden"
    },
    {
      id: 4,
      name: "Twitter Header",
      description: "Banner for your profile",
      dimensions: "1500x500",
      icon: "🐦",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back!</h1>
              <p className="text-muted-foreground mt-1">Let's create something amazing today</p>
            </div>
            <Button className="btn-hero">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-feature">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                      <p className="text-2xl font-bold text-foreground">24</p>
                    </div>
                    <div className="bg-gradient-to-br from-golden/20 to-golden/10 p-3 rounded-xl">
                      <Sparkles className="h-6 w-6 text-golden" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald mr-1" />
                    <span className="text-emerald">+12%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">AI Captions Used</p>
                      <p className="text-2xl font-bold text-foreground">156</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald/20 to-emerald/10 p-3 rounded-xl">
                      <Zap className="h-6 w-6 text-emerald" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald mr-1" />
                    <span className="text-emerald">+28%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Downloads</p>
                      <p className="text-2xl font-bold text-foreground">89</p>
                    </div>
                    <div className="bg-gradient-to-br from-golden/20 to-emerald/20 p-3 rounded-xl">
                      <Download className="h-6 w-6 text-golden" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4 text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald mr-1" />
                    <span className="text-emerald">+8%</span>
                    <span className="text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Projects */}
            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Recent Projects</CardTitle>
                    <CardDescription>Continue working on your latest creations</CardDescription>
                  </div>
                  <Button variant="outline" className="btn-ghost">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center space-x-4 p-4 border border-border rounded-xl hover:border-golden/50 transition-colors cursor-pointer">
                      <div className={`w-16 h-16 ${project.thumbnail} rounded-lg flex items-center justify-center`}>
                        <Image className="h-6 w-6 text-foreground/70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-foreground truncate">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.platform}
                          </Badge>
                          <Badge 
                            variant={project.status === 'Published' ? 'default' : 'outline'}
                            className={`text-xs ${
                              project.status === 'Published' 
                                ? 'bg-emerald text-white' 
                                : project.status === 'Scheduled'
                                ? 'bg-golden text-charcoal'
                                : ''
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          {project.lastModified}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Start */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-lg">Quick Start</CardTitle>
                <CardDescription>Choose a template to begin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id.toString())}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedTemplate === template.id.toString()
                        ? 'border-golden bg-golden/10'
                        : 'border-border hover:border-golden/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`text-2xl`}>
                        {template.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground">
                          {template.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {template.dimensions}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="btn-hero w-full mt-4">
                  <Plus className="h-4 w-4 mr-2" />
                  Start Creating
                </Button>
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="h-5 w-5 text-golden mr-2" />
                  AI Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start btn-ghost">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Caption
                </Button>
                <Button variant="outline" className="w-full justify-start btn-ghost">
                  <Image className="h-4 w-4 mr-2" />
                  Compress Image
                </Button>
                <Button variant="outline" className="w-full justify-start btn-ghost">
                  <Share2 className="h-4 w-4 mr-2" />
                  Multi-Export
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-emerald/30 bg-gradient-to-br from-emerald/5 to-emerald/10">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald/20 p-2 rounded-lg">
                    <Sparkles className="h-4 w-4 text-emerald" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      Pro Tip
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Use AI captions to boost engagement by up to 40%. Try different tones and styles!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;