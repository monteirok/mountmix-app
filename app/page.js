import Header from "./components/Header/Header";
import Logo from "./components/Logo/LogoLight";
import Instagram from "./components/Socials/Instagram";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-calc overflow-hidden">
      <div className="container grid grid-cols-1 gap-6 sm:gap-8 py-8 px-5 sm:px-6 frosted-glass">
        <Header text="ABOUT US" />
        {/* <Logo /> */}
        <p className="px-6 sm:px-10 text-center text-neutral-200 text-lg sm:text-xl xl:text-2xl">
        Welcome to <b>Mountain Mixology</b>, the premier cocktail catering service in Canmore, AB. We specialize in crafting bespoke, high-quality cocktails that add style and sophistication to any event. From intimate gatherings to large celebrations, our creativity and expertise ensure every experience is unique and unforgettable.
          {/* Visit our <Link className='link' href="https://instagram.com/mountain.mixology" target="_blank" title="@mountain.mixology">Instagram</Link> for the latest updates. */}
        </p>
        <span className="flex justify-center items-center pt-2 pb-5">
          <Instagram />
        </span>
      </div>
    </section>
  );
}
