import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Edit3, 
  Save, 
  X,
  Settings,
  BarChart3,
  Download,
  Share2,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    bio: "Creative content creator passionate about social media design and storytelling.",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    website: "alexjohnson.com"
  });

  const stats = [
    { label: "Posts Created", value: "156", icon: BarChart3, color: "golden" },
    { label: "Total Downloads", value: "89", icon: Download, color: "emerald" },
    { label: "Shares", value: "234", icon: Share2, color: "golden" },
    { label: "Templates Used", value: "45", icon: Settings, color: "emerald" }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Created",
      item: "Summer Sale Campaign",
      time: "2 hours ago",
      type: "create"
    },
    {
      id: 2,
      action: "Downloaded",
      item: "Product Launch Post",
      time: "1 day ago",
      type: "download"
    },
    {
      id: 3,
      action: "Shared",
      item: "Holiday Special Offer",
      time: "3 days ago",
      type: "share"
    },
    {
      id: 4,
      action: "Deleted",
      item: "Old Campaign Draft",
      time: "5 days ago",
      type: "delete"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to your backend
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'create': return <Edit3 className="h-4 w-4" />;
      case 'download': return <Download className="h-4 w-4" />;
      case 'share': return <Share2 className="h-4 w-4" />;
      case 'delete': return <Trash2 className="h-4 w-4" />;
      default: return <Edit3 className="h-4 w-4" />;
    }
  };

  const getActionColor = (type) => {
    switch (type) {
      case 'create': return 'text-emerald';
      case 'download': return 'text-golden';
      case 'share': return 'text-blue-500';
      case 'delete': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Profile</h1>
              <p className="text-muted-foreground mt-1">Manage your account and track your activity</p>
            </div>
            <Link to="/dashboard">
              <Button variant="outline" className="btn-ghost">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <Card className="card-premium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Profile Information</CardTitle>
                  {!isEditing ? (
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(true)}
                      className="btn-ghost"
                    >
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleSave}
                        className="btn-hero"
                        size="sm"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                        size="sm"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-golden/20 to-emerald/20">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" className="btn-ghost">
                      Change Photo
                    </Button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{profileData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{profileData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{profileData.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{profileData.joinDate}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                    />
                  ) : (
                    <p className="text-foreground">{profileData.bio}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Your latest actions on PostMux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                      <div className={`p-2 rounded-lg bg-muted/50 ${getActionColor(activity.type)}`}>
                        {getActionIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.action}</span> "{activity.item}"
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
                <CardDescription>Overview of your PostMux activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${
                        stat.color === 'golden' 
                          ? 'from-golden/20 to-golden/10' 
                          : 'from-emerald/20 to-emerald/10'
                      }`}>
                        <stat.icon className={`h-4 w-4 ${
                          stat.color === 'golden' ? 'text-golden' : 'text-emerald'
                        }`} />
                      </div>
                      <span className="text-sm text-foreground">{stat.label}</span>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {stat.value}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-feature">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/create" className="block">
                  <Button className="btn-hero w-full">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Create New Post
                  </Button>
                </Link>
                <Link to="/dashboard" className="block">
                  <Button variant="outline" className="btn-ghost w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Dashboard
                  </Button>
                </Link>
                <Button variant="outline" className="btn-ghost w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Posts
                </Button>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="border-muted-foreground/20">
              <CardHeader>
                <CardTitle className="text-lg">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start btn-ghost">
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </Button>
                <Button variant="outline" className="w-full justify-start btn-ghost">
                  <User className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
                <Separator />
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;