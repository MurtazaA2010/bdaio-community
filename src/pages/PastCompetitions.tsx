import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const PastCompetitions = () => {
  const competitions = [
    {
      title: "BdAIO 2025: Recognizing Bangladeshi Vegetables",
      link: "https://www.kaggle.com/competitions/recognizing-bangladeshi-vegetables",
    },
    {
      title: "BDAIO 2025: Margin Masters",
      link: "https://www.kaggle.com/competitions/bdaio-2025-margin-masters",
    },
    {
      title: "6-7..., 8?",
      link: "https://www.kaggle.com/competitions/6-7-8",
    },
    {
      title: "Emissions Oracle",
      link: "https://www.kaggle.com/competitions/emissions-oracle",
    },
    {
      title: "The GPS Blackout - Computer Vision Challenge",
      link: "https://www.kaggle.com/competitions/the-gps-blackout-computer-vision-challenge",
    },
    {
      title: "Iris - Your Favourite Dataset",
      link: "https://www.kaggle.com/competitions/iris-your-favourite-dataset",
    },
    {
      title: "Welcome to the BDAIO Qualifier Round",
      link: "https://www.kaggle.com/competitions/bdaio-nlp-genre-prediction",
    },
    {
      title: "BdAIO Camp: Violence Inciting Text Detection",
      link: "https://www.kaggle.com/competitions/bd-aio-camp-violence-inciting-text-detection",
    },
    {
      title: "Smoker Status",
      link: "https://www.kaggle.com/competitions/smoker-status-bdaio",
    },
    {
      title: "BDAIO 2023: Bangladeshi Fashion Dataset",
      link: "https://www.kaggle.com/competitions/bdaio-2023-bangladeshi-fashion-dataset",
    },
    {
      title: "Who is that Pokemon?",
      link: "https://www.kaggle.com/competitions/who-is-that-pokemon",
    },
    {
      title: "BDAIO2024: Segment & Conquer",
      link: "https://www.kaggle.com/competitions/bdaio-2024-segment-conquer",
    },
    {
      title: "BDAIO2024: The Clothing Sale",
      link: "https://www.kaggle.com/competitions/bdaio-2024-the-clothing-sale",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <h1 className="text-4xl font-serif font-bold mb-2 text-center">
          Past Competitions
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Previous Olympiad questions and solutions for reference and practice.
        </p>

        <div className="space-y-10">
          {competitions.map((competition, index) => (
            <Card key={index} className="shadow-none border-0 bg-transparent">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold font-serif mb-1">
                    {index + 1}. {competition.title}
                  </h2>
                </div>
                <div className="flex gap-6 mt-3">
                  {competition.link && (
                    <a
                      href={competition.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm font-medium"
                    >
                      View Competition →
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          — End of Past Competitions —
        </footer>
      </main>
    </div>
  );
};

export default PastCompetitions;
