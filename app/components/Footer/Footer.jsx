import Link from "next/link";
import Instagram from "../Socials/Instagram";

export default function Footer() {
  return (
    // <footer className='w-full grid grid-cols-1 gap-6 items-center py-6 bg-neutral-900 overflow-hidden'>
    <footer className='w-full grid grid-cols-1 gap-6 items-center py-6 bg-transparent'>
        <div className="flex justify-center">
            <Link href="https://www.instagram.com/mountain.mixology" target='_blank' title="@mountain.mixology">
                <Instagram />
            </Link>
        </div>
    </footer>
  );
}
