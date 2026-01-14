import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            BDAIO Community
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Student Community Hub for AI Learning and Competition
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://discord.gg/SpDzQnaPpQ" target="_blank" rel="noopener noreferrer">
              Join Our Discord Community
            </a>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Book References</CardTitle>
              <CardDescription>Essential AI textbooks and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Curated list of books covering AI fundamentals, machine learning, and deep learning
              </p>
              <a href="/books" className="text-sm font-medium text-primary hover:underline">
                Browse Books →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Online Courses</CardTitle>
              <CardDescription>Top courses for AI learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Recommended online courses from leading platforms and universities
              </p>
              <a href="/courses" className="text-sm font-medium text-primary hover:underline">
                View Courses →
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Additional learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Blogs, forums, research papers, and other helpful resources
              </p>
              <a href="/resources" className="text-sm font-medium text-primary hover:underline">
                Explore Resources →
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Past Competition Questions</CardTitle>
            <CardDescription>Practice with previous olympiad problems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access questions and solutions from previous BDAIO competitions to prepare for upcoming challenges
            </p>
            <a href="/past-competitions" className="text-sm font-medium text-primary hover:underline">
              View Past Competitions →
            </a>
          </CardContent>
        </Card>
      </main>
      <footer className="flex flex-col items-center text-center py-4">
  <p className="text-sm text-muted-foreground mb-2">
    © 2025 BDAIO Community. All rights reserved.
  </p>
  <p className="text-sm text-muted-foreground">
    Developed by <a href="https://github.com/MurtazaA2010" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Murtaza Abdullah</a>
  </p>
</footer>

    </div>
  );
};

export default Index;
