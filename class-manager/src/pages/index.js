import Image from "next/image";
import { Inter } from "next/font/google";
import ClassroomManager from "@/components/ClassroomManager";
import { ClassProvider } from "@/context/ClassContext";
import { StudentProvider } from "@/context/StudentContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ClassProvider>
        <StudentProvider>
        <ClassroomManager />
        </StudentProvider>
      </ClassProvider>
    </main>
  );
}
