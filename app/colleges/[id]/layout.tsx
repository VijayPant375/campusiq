import { Metadata } from "next";
import { prisma } from '@/lib/prisma';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const college = await prisma.college.findUnique({
    where: { id: parseInt(params.id, 10) },
    select: { name: true, location: true }
  });
  
  if (!college) {
    return { title: "College Not Found | CampusIQ" };
  }
  
  return {
    title: `${college.name} | CampusIQ`,
    description: `Learn more about ${college.name} located in ${college.location}.`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
