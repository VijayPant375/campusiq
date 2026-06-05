import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Colleges | CampusIQ",
  description: "Compare multiple colleges side-by-side to find the perfect fit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
