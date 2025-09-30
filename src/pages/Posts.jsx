import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Edit3, 
  Download, 
  Share2, 
  Trash2,
  Eye,
  Calendar,
  Image,
  Grid3X3,
  List
} from "lucide-react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: "Summer Sale Campaign",
      platform: "Instagram",
      status: "Published",
      createdAt: "2024-01-15",
      views: 1250,
      downloads: 45,
      shares: 23,
      thumbnail: "bg-gradient-to-br from-golden/30 to-emerald/20"
    },
    {
      id: 2,
      title: "Product Launch Announcement",
      platform: "LinkedIn",
      status: "Draft",
      createdAt: "2024-01-14",
      views: 0,
      downloads: 0,
      shares: 0,
      thumbnail: "bg-gradient-to-br from-emerald/30 to-golden/20"
    },
    {
      id: 3,
      title: "Holiday Special Offer",
      platform: "Facebook",
      status: "Scheduled",
      createdAt: "2024-01-13",
      views: 890,
      downloads: 32,
      shares: 18,
      thumbnail: "bg-gradient-to-br from-golden/20 to-emerald/30"
    },
    {
      id: 4,
      title: "Behind the Scenes",
      platform: "Instagram",
      status: "Published",
      createdAt: "2024-01-12",
      views: 2100,
      downloads: 67,
      shares: 45,
      thumbnail: "bg-gradient-to-br from-emerald/20 to-golden/30"
    },
    {
      id: 5,
      title: "Team Introduction",
      platform: "LinkedIn",
      status: "Published",
      createdAt: "2024-01-11",
      views: 1560,
      downloads: 28,
      shares: 34,
      thumbnail: "bg-gradient-to-br from-golden/25 to-emerald/25"
    },
    {
      id: 6,
      title: "New Feature Highlight",
      platform: "Twitter",
      status: "Draft",
      createdAt: "2024-01-10",
      views: 0,
      downloads: 0,
      shares: 0,
      thumbnail: "bg-gradient-to-br from-emerald/25 to-golden/25"
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-emerald text-white';
      case 'Scheduled': return 'bg-golden text-charcoal';
      case 'Draft': return 'border-muted-foreground text-muted-foreground';
      default: return 'border-muted-foreground text-muted-foreground';
    }
  };

  const PostCard = ({ post }: { post: typeof posts[0] }) => (
    <Card className="card-feature group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4">
        <div className={`w-full h-32 ${post.thumbnail} rounded-lg mb-4 flex items-center justify-center`}>
          <Image className="h-8 w-8 text-foreground/70" />
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <Badge variant="secondary" className="text-xs">
                {post.platform}
              </Badge>
              <Badge variant="outline" className={`text-xs ${getStatusColor(post.status)}`}>
                {post.status}
              </Badge>
            </div>
          </div>

          <div className="flex items-center text-xs text-muted-foreground space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="h-3 w-3" />
              <span>{post.downloads}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Share2 className="h-3 w-3" />
              <span>{post.shares}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center space-x-1">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Edit3 className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Download className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Share2 className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PostListItem = ({ post }: { post: typeof posts[0] }) => (
    <Card className="card-feature">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 ${post.thumbnail} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Image className="h-6 w-6 text-foreground/70" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  {post.platform}
                </Badge>
                <Badge variant="outline" className={`text-xs ${getStatusColor(post.status)}`}>
                  {post.status}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-xs text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-3 w-3" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-3 w-3" />
                  <span>{post.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share2 className="h-3 w-3" />
                  <span>{post.shares}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Edit3 className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Download className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Share2 className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Posts</h1>
              <p className="text-muted-foreground mt-1">Manage all your social media content</p>
            </div>
            <Link to="/create">
              <Button className="btn-hero">
                <Plus className="h-4 w-4 mr-2" />
                Create New Post
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-80"
              />
            </div>
            <Button variant="outline" className="btn-ghost">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'btn-hero' : 'btn-ghost'}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'btn-hero' : 'btn-ghost'}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Posts Grid/List */}
        {filteredPosts.length === 0 ? (
          <Card className="card-feature">
            <CardContent className="p-12 text-center">
              <Image className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm ? 'Try adjusting your search terms' : 'Create your first post to get started'}
              </p>
              <Link to="/create">
                <Button className="btn-hero">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
          }>
            {filteredPosts.map((post) =>
              viewMode === 'grid' ? (
                <PostCard key={post.id} post={post} />
              ) : (
                <PostListItem key={post.id} post={post} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;