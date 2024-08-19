import Link from 'next/link';

const NotFound = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <p className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300">
          Return Home
        </p>
      </Link>
    </div>
  </div>
);

export default NotFound;
