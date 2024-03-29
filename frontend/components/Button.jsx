export default function Button({ children }) {
  return (
    <div className="group relative inline-flex w-48 items-center justify-center overflow-hidden rounded-full border-2 border-primary p-4 px-6 py-3 font-medium text-primary shadow-md transition duration-300 ease-out">
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary text-white duration-300 group-hover:translate-x-0">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="ease absolute flex h-full w-full transform items-center justify-center text-xl text-primary transition-all duration-300 group-hover:translate-x-full">
        {children}
      </span>
      <span className="invisible relative">{children}</span>
    </div>
  );
}
