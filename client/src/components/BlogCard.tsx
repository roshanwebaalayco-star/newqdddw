import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/marketing";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className="group flex h-full flex-col overflow-hidden border-border/60 bg-card/80 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        data-testid={`card-blog-${post.id}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span data-testid={`text-blog-date-${post.id}`}>{post.date}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <CardTitle
            className="font-heading text-xl leading-tight transition-colors group-hover:text-primary"
            data-testid={`text-blog-title-${post.id}`}
          >
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-auto">
          <CardDescription className="line-clamp-3 text-sm text-muted-foreground" data-testid={`text-blog-excerpt-${post.id}`}>
            {post.excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
