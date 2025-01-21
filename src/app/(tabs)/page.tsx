const HomePage = () => {
  return (
    <div className='w-full max-w-xl mx-auto space-y-4'>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className='h-20 bg-red-400'></div>
      ))}
    </div>
  );
};

export default HomePage;
