import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  Sparkles, 
  Download, 
  Share2, 
  Image as ImageIcon,
  Type,
  Palette,
  Layers,
  Zap,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";

const PostCreator = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["instagram"]);
  const [captionText, setCaptionText] = useState("");
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);

  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, dimensions: "1080x1080", color: "golden" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, dimensions: "1200x627", color: "emerald" },
    { id: "facebook", name: "Facebook", icon: Facebook, dimensions: "1200x630", color: "golden" }
  ];

  const templates = [
    { id: 1, name: "Minimal", preview: "bg-gradient-to-br from-charcoal to-charcoal-light" },
    { id: 2, name: "Bold", preview: "bg-gradient-to-br from-golden/80 to-emerald/80" },
    { id: 3, name: "Professional", preview: "bg-gradient-to-br from-emerald/60 to-charcoal" },
    { id: 4, name: "Creative", preview: "bg-gradient-to-br from-golden to-emerald" }
  ];

  const generateCaption = async () => {
    setIsGeneratingCaption(true);
    // Simulate AI caption generation
    setTimeout(() => {
      setCaptionText("✨ Transform your ideas into stunning visuals with PostMux! Our AI-powered platform makes content creation effortless. 🚀\n\n#PostMux #ContentCreation #SocialMedia #AIGenerated #DigitalMarketing");
      setIsGeneratingCaption(false);
    }, 2000);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-golden to-emerald p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-charcoal" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Post Creator</h1>
                <p className="text-sm text-muted-foreground">Design professional social media content</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="btn-ghost">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button className="btn-hero">
                <Share2 className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Canvas/Preview */}
          <div className="lg:col-span-2">
            <Card className="card-premium h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Design Canvas</CardTitle>
                  <div className="flex items-center space-x-2">
                    {selectedPlatforms.map(platformId => {
                      const platform = platforms.find(p => p.id === platformId);
                      if (!platform) return null;
                      return (
                        <Badge key={platformId} variant="secondary" className="text-xs">
                          {platform.dimensions}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Canvas Area */}
                <div className="aspect-square bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal rounded-xl border-2 border-dashed border-border relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="bg-gradient-to-r from-golden/20 to-emerald/20 p-8 rounded-2xl">
                        <Upload className="h-12 w-12 text-golden mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Upload Your Image
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Drag and drop or click to select an image
                        </p>
                        <Button className="btn-secondary">
                          <Upload className="h-4 w-4 mr-2" />
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <Button variant="outline" className="btn-ghost">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Compress
                  </Button>
                  <Button variant="outline" className="btn-ghost">
                    <Type className="h-4 w-4 mr-2" />
                    Add Text
                  </Button>
                  <Button variant="outline" className="btn-ghost">
                    <Palette className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <Button variant="outline" className="btn-ghost">
                    <Layers className="h-4 w-4 mr-2" />
                    Elements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools Panel */}
          <div className="space-y-6">
            {/* Platform Selection */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-lg">Target Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    onClick={() => togglePlatform(platform.id)}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedPlatforms.includes(platform.id)
                        ? 'border-golden bg-golden/10'
                        : 'border-border hover:border-golden/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${
                        platform.color === 'golden' 
                          ? 'from-golden/20 to-golden/10' 
                          : 'from-emerald/20 to-emerald/10'
                      }`}>
                        <platform.icon className={`h-5 w-5 ${
                          platform.color === 'golden' ? 'text-golden' : 'text-emerald'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-foreground">
                          {platform.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {platform.dimensions}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Caption Generator */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="h-5 w-5 text-golden mr-2" />
                  AI Caption Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="caption-prompt">Describe your post</Label>
                  <Input
                    id="caption-prompt"
                    placeholder="e.g., Promoting our new AI-powered design tool"
                    className="bg-input border-border"
                  />
                </div>
                <Button 
                  onClick={generateCaption}
                  disabled={isGeneratingCaption}
                  className="btn-hero w-full"
                >
                  {isGeneratingCaption ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Caption
                    </>
                  )}
                </Button>
                {captionText && (
                  <div className="space-y-2">
                    <Label htmlFor="generated-caption">Generated Caption</Label>
                    <Textarea
                      id="generated-caption"
                      value={captionText}
                      onChange={(e) => setCaptionText(e.target.value)}
                      className="bg-input border-border"
                      rows={6}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-lg">Quick Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className="cursor-pointer group"
                    >
                      <div className={`aspect-square ${template.preview} rounded-lg border border-border group-hover:border-golden/50 transition-colors mb-2`} />
                      <p className="text-xs text-center text-muted-foreground">
                        {template.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card className="border-emerald/30 bg-gradient-to-br from-emerald/5 to-emerald/10">
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <div className="bg-emerald/20 p-3 rounded-xl inline-flex">
                    <Download className="h-6 w-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      Ready to Export?
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      Download optimized versions for all selected platforms
                    </p>
                    <Button className="btn-secondary w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Export All Formats
                    </Button>
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

export default PostCreator;