import { Link } from "react-router-dom";

const UnderDevelopmentPage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4 bg-[var(--rem-light-gray)]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center leading-tight">
        Sorry, this page is under Construction.
      </h1>
      <Link
        to="/"
        className="text-xl md:text-2xl text-[var(--rem-orange)] hover:text-blue-800 hover:underline font-medium transition-colors duration-200"
      >
        Click/Tap here to go back
      </Link>
    </main>
  );
};

export default UnderDevelopmentPage;
