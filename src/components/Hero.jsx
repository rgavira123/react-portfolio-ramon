import ramonProfile from "../assets/ramonProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ramon Gavira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Software Engineering Student at Universidad de Sevilla
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter"></p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={ramonProfile}
              alt="Ramon Gavira"
              className="rounded-full w-48 h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
