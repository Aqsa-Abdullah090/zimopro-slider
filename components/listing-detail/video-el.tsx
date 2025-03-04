/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import AudioWave from "./audio-wave";
import clsx from "clsx";

interface Props {
  url: string;
}

function VideoEl({ url }: Readonly<Props>) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(true);
  const ref = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      ref.current?.pause();
    } else {
      setPlaying(true);
      ref.current?.play();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={url}
        className="h-full w-full object-cover"
        autoPlay={false}
        loop
        muted={muted}
        onClick={togglePlay}
      />
      <div
        className="absolute bottom-2 right-2 3xl:bottom-8 3xl:right-8 z-50"
        onClick={() => setMuted(!muted)}
      >
        <AudioWave muted={muted} />
      </div>

      <button
        className={clsx(
          "absolute top-2 right-2 w-12 3xl:top-8 3xl:right-8 z-50 flex justify-center items-center",
          "opacity-25 hover:opacity-100 transition-all duration-300"
        )}
        onClick={togglePlay}
      >
        <img
          src={`/assets/buttons/${playing ? "pause.svg" : "play.svg"}`}
          className="h-[22px] 3xl:h-[30px]"
          alt=""
        />
      </button>
    </>
  );
}
export default VideoEl;
