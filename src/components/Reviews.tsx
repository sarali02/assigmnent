import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    content: 'Excellent service! The assignment was delivered on time and exceeded my expectations.',
  },
  {
    id: 2,
    author: 'James K.',
    rating: 4,
    content: 'Very professional team. Good communication throughout the process.',
  },
];

export default function Reviews() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Reviews and Trust Go Hand in Hand
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    {review.author[0]}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{review.author}</h4>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}