import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Books = () => {
  const books = [
    {
      title: "Mathematics for Machine Learning",
      author: "A. Aldo Faisal, Cheng Soon Ong, and Marc Peter Deisenroth",
      link : "https://mml-book.github.io/"
    },
    {
      title: "Hands-On_Machine_Learning_with_Scikit-Learn-Keras-and-TensorFlow",
      author: "Aurelien Geron",
      link: "http://14.139.161.31/OddSem-0822-1122/Hands-On_Machine_Learning_with_Scikit-Learn-Keras-and-TensorFlow-2nd-Edition-Aurelien-Geron.pdf"
    },
    {
      title: "Data Science from Scratch",
      author: "Joel Grus",
      link: "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/Data%20Science%20from%20Scratch%20by%20Joel%20Grus.pdf"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navigation />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-2 text-center">
          Book References
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Essential readings for a deep theoretical and practical understanding of Artificial Intelligence.
        </p>

        <div className="space-y-10">
          {books.map((book, index) => (
            <Card
              key={index}
              className="shadow-none border-0 bg-transparent"
            >
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold font-serif mb-1">
                  {index + 1}. {book.title}
                </h2>
                <p className="text-gray-700 italic mb-3">{book.author}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm font-medium"
                >
                  Download Book →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Books;
