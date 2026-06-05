import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Colleges | CampusIQ",
  description: "Search and filter through top engineering colleges in India.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
