import Window from "./components/Window";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <div className="bg-purple-800 h-screen">
        <Banner />
        <Grid />
        <img
          src="/assets/04.webp"
          alt="cat"
          className="absolute top-3 right-96 h-60 w-60"
        />
        <div className="absolute top-5 right-3">
          <Window title="">
            <p className="text-red-500 font-extrabold text-2xl bg-white">
              hot singles in your area!!! <img />
            </p>
          </Window>
        </div>
        <img
          src="/assets/03.webp"
          alt="cat"
          className="absolute top-8 left-36 h-60 w-60"
        />
        <Form />
        <img
          src="/assets/02.webp"
          alt="cat"
          className="absolute right-16 bottom-28 h-60 w-60"
        />
        <img
          src="/assets/01.webp"
          alt="cat"
          className="absolute bottom-56 left-96 h-60 w-60"
        />
        <div className="absolute bottom-4 z-20">
          <Banner />
        </div>
      </div>
    </>
  );
};

export default App;
