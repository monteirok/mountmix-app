'use client';
import Link from "next/link";
import Header from "../components/Header/Header";

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
        <section className='container flex justify-center items-center h-calc leading-book-catering md:leading-none'>
            <div className='flex flex-col gap-6 py-10 px-6 sm:px-10 md:px-20 lg:px-30 xl:px-40 frosted-glass'>
                <Header text="BOOK CATERING" />
                <p className="text-center text-neutral-200 text-xl xl:text-2xl break-word sm:break-normal">
                    We are currently accepting booking reservations via email at the moment. Please send all booking inquiries to <Link className="link" href="mailto:reservations@mountainmixology.ca" title="Click to copy" onClick={handleCopyToClipboard}>reservations@mountainmixology.ca</Link>.
                </p>
            </div>
        </section>
    )
}
