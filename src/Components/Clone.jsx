import { useRef, useState } from "react";
import img from "../assets/derek-truninger-uLitVttkC7o-unsplash.jpg";
import "../App.css";
import audio from "../Audio/audio.mp3";
const Clone = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const playing = !isPlaying;
    setIsPlaying(playing);

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-white text-center text-5xl font-semibold font-[sans-serif] ">
        Best for you
      </h1>
      <img
        src={img}
        alt="Featured"
        className="m-auto mt-10 border-black rounded-xl w-[500px] object-cover h-[400px]"
      />
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source type="audio/mp3" src={audio} />
      </audio>
      <div className="flex justify-around gap-10 bg-gray-700 w-[700px] py-4 px-2 rounded-lg m-auto mt-5 items-center">
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <i
              className="fa-solid fa-pause"
              style={{ color: "white", fontSize: "23px" }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-play"
              style={{ color: "white", fontSize: "23px" }}
            ></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Clone;
