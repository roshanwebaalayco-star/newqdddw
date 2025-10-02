import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="hover-elevate transition-all duration-300 overflow-hidden h-full" data-testid={`card-blog-${post.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-blog-date-${post.id}`}>{post.date}</span>
          </div>
          <CardTitle className="font-heading text-xl hover:text-primary transition-colors" data-testid={`text-blog-title-${post.id}`}>
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3" data-testid={`text-blog-excerpt-${post.id}`}>
            {post.excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
