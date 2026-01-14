import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Stanford CS229: Machine Learning Course",
      platform: "Youtube",
      link: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera — deeplearning.ai",
    },
    {
      title: "CS50’s Introduction to Artificial Intelligence with Python",
      platform: "Harvard University — edX",
      
    },
    {
      title: "Machine Learning with Python and Scikit-Learn – Full Course",
      platform: "Youtube",
      link : "https://www.youtube.com/watch?v=hDKCxebp88A&t=10147s"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-2 text-center">
          Course References
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Recommended online courses for mastering Artificial Intelligence concepts and practical applications.
        </p>

        <div className="space-y-10">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="shadow-none border-0 bg-transparent"
            >
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold font-serif mb-1">
                  {index + 1}. {course.title}
                </h2>
                <p className="text-gray-700 italic mb-3">{course.platform}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm font-medium"
                >
                  View Course →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          — End of Course References —
        </footer>
      </main>
    </div>
  );
};

export default Courses;
