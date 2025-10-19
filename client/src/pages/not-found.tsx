import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <MarketingLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <Card className="max-w-lg border border-border/60 bg-card/80 shadow-xl">
          <CardContent className="space-y-6 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <AlertCircle className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h1 className="font-heading text-3xl font-semibold">Page not found</h1>
              <p className="text-sm text-muted-foreground">
                The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/">
                <Button className="inline-flex items-center gap-2 rounded-full px-6">
                  <Home className="h-4 w-4" />
                  Return home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </MarketingLayout>
  );
}
