export default function Button(props) {
    return (
      <>
        <button className="group relative inline-flex items-center justify-center overflow-hidden border-3 md:border-2 border-accent rounded-full py-5 md:py-3 px-6 md:px-5 text-indigo-600 shadow-md transition duration-300 ease-out">
          <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent text-dark duration-300 group-hover:translate-x-0">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="ease absolute flex h-full w-full transform items-center justify-center text-accent transition-all duration-300 group-hover:translate-x-full">
            {props.text}
          </span>
          <span className="invisible relative">
            {props.text}
          </span>
      </button>
    </>
  );
}
