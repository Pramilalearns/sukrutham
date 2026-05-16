import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Farm House Rooms in Thrissur | Traditional Kerala Stay",
    description: "Relax in our Diamond Class certified traditional Kerala rooms. Surrounded by lush greenery and paddy fields, our rooms offer the perfect blend of ethnic charm and modern comfort.",
};

export default function RoomsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
