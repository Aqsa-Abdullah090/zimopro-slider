import clsx from "clsx";

interface Props {
  muted: boolean;
}

const AudioWave = ({ muted }: Props) => {
  return (
    <div
      className={clsx(
        "audio__wave__animation__wrapper  z-50",
        muted ? "opacity-25" : "opacity-100"
      )}
    >
      <ul className="bars">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default AudioWave;
