import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Sukrutham Farmstay",
    description: "Find answers to common questions about stay, amenities, food, and local activities at Sukrutham Farmstay. Everything you need to know for a perfect Kerala getaway.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
