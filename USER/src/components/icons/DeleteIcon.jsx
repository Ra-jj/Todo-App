const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 48 48"
    {...props}
  >
    <mask id="a">
      <g fill="none" strokeLinejoin="round" strokeWidth={4}>
        <path fill="#fff" stroke="#fff" d="M9 10v34h30V10H9Z" />
        <path stroke="#000" strokeLinecap="round" d="M20 20v13m8-13v13" />
        <path stroke="#fff" strokeLinecap="round" d="M4 10h40" />
        <path fill="#fff" stroke="#fff" d="m16 10 3.289-6h9.488L32 10H16Z" />
      </g>
    </mask>
    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#a)" />
  </svg>
);
export default DeleteIcon;
