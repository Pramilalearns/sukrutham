import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Homestay in Thrissur Kerala | Authentic Farm Experience",
    description: "Experience the true essence of Kerala at Sukrutham Farmstay, a leading homestay in Thrissur. Enjoy organic food, traditional architecture, and a peaceful village life.",
};

export default function HomestayLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
