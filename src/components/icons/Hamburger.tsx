export default function Hamburger({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}
