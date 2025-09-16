import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden h-[500px] w-full">
      <OrbitingCircles>
        <File />
        <Settings />
        <File />
      </OrbitingCircles>
      <OrbitingCircles radius={100}>
        <File />
        <Settings />
        <File />
        <Search />
      </OrbitingCircles>
    </div>
  );
}
