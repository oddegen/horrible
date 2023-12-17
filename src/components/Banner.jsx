const Banner = () => {
  return (
    <div className="bg-pink-500 text-yellow-200 p-4">
      <h2 className="text-4xl font-bold italic underline">Coolest Website</h2>
      <p className="text-lg mt-2">Made by me</p>
      <div className="mt-4 flex justify-between items-center bg-green-600 text-white p-2 rounded-lg">
        <p className="text-sm">
          Your body is a temple. A temple of blood rituals and pagan tributes, a
          lost temple, a temple that needs more calcium. You should maybe try
          vitamin supplements.
        </p>
        <button className="bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-900">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Banner;
