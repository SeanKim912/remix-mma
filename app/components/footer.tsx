import { NavLink } from "@remix-run/react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="bg-black text-white text-center w-screen absolute left-0 right-0"
        >
            <div className="container mx-auto py-6 flex flex-col justify-between items-center h-full">
                <p className="text-base lg:text-lg">
                    835 Virginia Rd, Unit C, Crystal Lake, IL 60014
                </p>
            </div>
        </footer>
    )
}
