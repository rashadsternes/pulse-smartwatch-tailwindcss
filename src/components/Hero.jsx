import smartwatchVideo from "../assets/smartwatchVideo.mp4";
import manUsingSmartwatch from "../assets/man-using-smart-watch-on-racetrack.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Train Smarter. Recover Faster. <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">Live Fully.</span> 
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Pulse is the screenless performance wearable that monitors your heart rate, sleep, recovery, and strain—so you can optimize every move you make.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          Start Free Trial 
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Learn How It Works
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
        >
          <source src={smartwatchVideo} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-purple-400 mx-2 my-4"
        >
          <source src={manUsingSmartwatch} type="video/mp4" />
        </video>
        {/* // Stock footage provided by <a class="link author-link-popup" target="_blank" href="https://www.videvo.net/author/freepik/#rs=attribution-modal">Freepik</a>, downloaded from <a class="videvo-redirect" target="_blank" href="https://www.videvo.net/#rs=attribution-modal">videvo.net</a> */}
      </div>
    </div>
  );
};

export default HeroSection;