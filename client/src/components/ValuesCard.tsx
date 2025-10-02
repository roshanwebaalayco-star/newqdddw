import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Value {
  title: string;
  description: string;
}

interface ValuesCardProps {
  values: Value[];
}

export default function ValuesCard({ values }: ValuesCardProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            The Values That Drive Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence is built on these core principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass border-0 hover-elevate transition-all duration-300"
              data-testid={`card-value-${index}`}
            >
              <CardHeader>
                <CardTitle className="font-heading text-lg" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
