import Button from '@/components/atoms/button/button';

const NotFound = () => {
  return (
    <main className="flex items-center h-[90vh] p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h2 className="mb-8 font-extrabold text-9xl ">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          Przepraszamy, ale nie znaleźliśmy takiej strony.
        </p>
        <p className="mt-4 mb-8 ">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Button href="/" rel="noopener noreferrer">
          Wróć do strony głównej
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
