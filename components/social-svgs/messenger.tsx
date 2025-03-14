interface Props {
  className: string;
}

function Messenger({ className }: Props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.69 56.69"
      className={className}
    >
      <path
        className="cls-1"
        d="M28.35,0C12.38,0,0,11.7,0,27.49c-.1,7.74,3.14,15.16,8.9,20.34.47.41.74.99.76,1.62l.16,5.05c.04,1.25,1.08,2.24,2.33,2.2.29,0,.58-.07.85-.19l5.63-2.48c.48-.21,1.01-.25,1.52-.11,2.67.73,5.43,1.1,8.21,1.09,15.97,0,28.35-11.7,28.35-27.49S44.31,0,28.35,0ZM45.37,21.16l-8.33,13.2c-1.25,1.99-3.88,2.58-5.87,1.33-.1-.06-.19-.13-.28-.2l-6.63-4.97c-.61-.46-1.44-.46-2.05,0l-8.94,6.8c-.58.46-1.43.36-1.88-.23-.35-.45-.38-1.08-.07-1.56l8.33-13.21c1.25-1.99,3.88-2.58,5.87-1.33.1.06.19.13.28.2l6.63,4.97c.61.46,1.44.46,2.05,0l8.94-6.79c.6-.45,1.44-.33,1.89.27.34.45.36,1.05.07,1.53Z"
      />
    </svg>
  );
}
export default Messenger;
