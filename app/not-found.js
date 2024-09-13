export default function NotFound() {
  return (
    <section className='frosted-glass-error'>
      <div className='container flex flex-col justify-center items-center gap-2 h-calc px-8 sm:px-16 md:px-18 text-center'>
        <h1 className='text-7xl sm:text-8xl lg:text-9xl font-black text-y3ll0w'>Uh oh!</h1>
        <h1 className='mt-2 md:mt-4 text-404 sm:text-404-sm lg:text-404-lg font-bold text-neutral-200'>404 — Page not found</h1>
        <p className='text-neutral-200 text-lg sm:text-xl xl:text-2xl'>
          The page you are looking for cannot be found. It may have been removed/changed, or is unavailable.
        </p>
      </div>
    </section>
  );
}
