interface Props {
  className: string;
}

function X({ className }: Props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.69 57.94"
      className={className}
    >
      <path
        id="logo"
        className="cls-1"
        d="M33.74,24.53L54.85,0h-5l-18.33,21.3L16.88,0H0l22.13,32.21L0,57.94h5l19.35-22.5,15.46,22.5h16.88l-22.95-33.41h0ZM26.89,32.5l-2.24-3.21L6.8,3.76h7.68l14.4,20.6,2.24,3.21,18.72,26.78h-7.69l-15.28-21.85h0Z"
      ></path>
    </svg>
  );
}
export default X;
