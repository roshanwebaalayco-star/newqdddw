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
        className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0f1222]/80 shadow-[0_28px_90px_-600px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1 hover:border-white/20"
        data-testid={`card-blog-${post.id}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060c]/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Badge variant="secondary" className="border border-white/30 bg-white/10 text-white/90 backdrop-blur">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="space-y-4 text-white">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-white/50">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <span data-testid={`text-blog-date-${post.id}`}>{post.date}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
          <CardTitle
            className="font-heading text-2xl leading-tight text-white transition-colors group-hover:text-primary"
            data-testid={`text-blog-title-${post.id}`}
          >
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-auto">
          <CardDescription className="line-clamp-3 text-sm text-white/70" data-testid={`text-blog-excerpt-${post.id}`}>
            {post.excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
