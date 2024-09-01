'use client';
import Link from "next/link";

export default function BookCatering() {
    const handleCopyToClipboard = (e) => {
        e.preventDefault();
        const email = "reservations@mountainmixology.ca";
        navigator.clipboard.writeText(email).then(() => {
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <section className='container mt-40 mb-7 sm:mb-8 py-6 md:py-8 lg:py-10 bg-neutral-800 frosted-glass'>
            <h1 className='leading-header sm:leading-header-sm lg:leading-header-lg text-7xl sm:text-head-sm xl:text-head-lg font-black text-center text-neutral-200'>
            BOOK CATERING
            </h1>
            <p className="text-center text-neutral-200 text-xl mt-6 px-6">
                We are currently accepting booking reservations via email at the moment. Please send all booking inquiries to <Link className="font-semibold text-orange-400 italic hover:underline" href="mailto:reservations@mountainmixology.ca" title="Click to copy" onClick={handleCopyToClipboard}>reservations@mountainmixology.ca</Link>.
            </p>
        </section>
    )
}