interface Props {
  className: string;
}

function Tumbler({ className }: Props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.69 100.14"
      className={className}
    >
      <path
        id="Path_48086"
        data-name="Path 48086"
        className="cls-1"
        d="M39.97,100.14c-15.06,0-26.29-7.75-26.29-26.29v-29.67H0v-16.09C15.06,24.18,21.36,11.22,22.09,0h15.64v25.49h18.25v18.67h-18.25v25.85c0,7.75,3.91,10.43,10.14,10.43h8.83v19.7h-16.72Z"
      ></path>
    </svg>
  );
}
export default Tumbler;
