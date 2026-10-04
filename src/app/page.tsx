import Hero from "@/components/Hero";
import ContentSections from "@/components/ContentSections";

export default function Home() {
  return (
    <main className="bg-[#030303] text-white selection:bg-purple-500/30">
      <Hero />
      <ContentSections />
    </main>
  );
}
