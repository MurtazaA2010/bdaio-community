import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">About BDAIO</h1>
        <p className="mb-8 text-muted-foreground">Bangladesh Artificial Intelligence Olympiad</p>
        
        <div className="space-y-6 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>What is BDAIO?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Bangladesh Artificial Intelligence Olympiad (BDAIO) is a national competition 
                designed to promote AI education and foster interest in artificial intelligence 
                among students across Bangladesh.
              </p>
              <p>
                Our mission is to create a platform where students can showcase their AI knowledge, 
                learn from each other, and prepare for careers in the rapidly evolving field of 
                artificial intelligence.
              </p>
            </CardContent>
          </Card>


          <Card>
            <CardHeader>
              <CardTitle>Contact & Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                Join our Discord community to connect with other participants, ask questions, 
                and stay updated on upcoming events.
              </p>
              <a 
                href="https://discord.gg/SpDzQnaPpQ" 
                className="inline-block text-sm font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server →
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
