import Link from "next/link";

export default function Button(props) {
    return (
      <>
        {/* <button className='flex justify-center items-center relative py-7 px-6 md:p-4rem bg-sky-800 hover:bg-bgTrans active:bg-bgTrans transition-all duration-300 ease-linear rounded-full group cursor-pointer overflow-hidden text-3xl md:text-base text-neutral-200 hover:text-neutral active:text-neutral-400 font-medium'>
            <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900'></div>
            <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800'></div>
            <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700'></div>
            <div className='absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600'></div>
            <p className='z-10'>{props.text}</p>
        </button> */}
        
          <button className="group relative inline-flex items-center justify-center overflow-hidden border-3 md:border-2 border-accent rounded-full py-5 md:py-3 px-6 md:px-5 text-indigo-600 shadow-md transition duration-300 ease-out">
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent text-dark duration-300 group-hover:translate-x-0">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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