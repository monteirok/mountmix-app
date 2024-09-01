import Link from "next/link";

export default function Home() {
  return (
    <section className='container grid grid-cols-1 gap-10 mt-20 mb-7 sm:mb-8 py-10 bg-neutral-800 frosted-glass'>
      <h1 className='leading-header sm:leading-header-sm text-head sm:text-head-sm xl:text-head-lg font-black text-center text-neutral-200'>
        COMING <span className='text-subhead sm:text-subhead-sm'>SOON</span>
      </h1>
      <p className="text-center text-neutral-200 text-2xl px-6">
        In the meantime, visit our <Link className='font-semibold text-orange-400 hover:underline' href="https://instagram.com/mountain.mixology" target="_blank" title="@mountain.mixology">Instagram</Link> for the latest updates.
      </p>
      </section>
  );
}
