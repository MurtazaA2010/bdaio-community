import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "BDAIO Discord Server",
      description: "Join our community to discuss AI, share resources, and get help",
      link: "#",
      type: "Community",
    },
    {
      title: "Kaggle",
      description: "Practice machine learning with real-world datasets and competitions",
      link: "https://www.kaggle.com",
      type: "Practice",
    },
    {
      title: "Papers with Code",
      description: "Latest AI research papers with implementation code",
      link: "https://paperswithcode.com",
      type: "Research",
    },
    {
      title: "Google AI Blog",
      description: "Latest news and insights from Google AI research",
      link: "https://ai.googleblog.com",
      type: "Blog",
    },
    {
      title: "ArXiv AI Section",
      description: "Latest preprints in artificial intelligence research",
      link: "https://arxiv.org/list/cs.AI/recent",
      type: "Research",
    },
    {
      title: "AI Alignment Forum",
      description: "Discussion on AI safety and alignment",
      link: "https://www.alignmentforum.org",
      type: "Forum",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-bold mb-2 text-center">
          Additional Resources
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Helpful resources for AI learning, practice, research, and community engagement.
        </p>

        <div className="space-y-10">
          {resources.map((resource, index) => (
            <Card key={index} className="shadow-none border-0 bg-transparent">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold font-serif mb-1">
                  {index + 1}. {resource.title}
                </h2>
                <p className="text-gray-700 italic mb-2">{resource.type}</p>
                <p className="text-gray-800 leading-relaxed text-justify mb-2">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm font-medium"
                >
                  Visit Resource →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          — End of Resources —
        </footer>
      </main>
    </div>
  );
};

export default Resources;
