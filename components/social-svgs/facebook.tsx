interface Props {
  className: string;
}

function Facebook({ className }: Props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.69 106.66"
      className={className}
    >
      <path
        id="Path_2"
        data-name="Path 2"
        className="cls-1"
        d="M52.99,59.54l2.94-19.16h-18.4v-12.43c0-5.24,2.57-10.35,10.8-10.35h8.36V1.3c-4.91-.79-9.86-1.23-14.83-1.3-15.14,0-25.03,9.18-25.03,25.78v14.6H0v19.16h16.83v46.31c6.86,1.07,13.85,1.07,20.71,0v-46.31h15.46Z"
      />
    </svg>
  );
}
export default Facebook;
