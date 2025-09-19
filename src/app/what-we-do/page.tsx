/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { WorkFlow } from "@/components/WhatWeDo/WorkFlow";
import { ServicesShowcase } from "@/components/WhatWeDo/ServicesShowcase";
import { WhatWeDoHero } from "@/components/WhatWeDo/WhatWeDoHero";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen">
      <WhatWeDoHero />
      <ServicesShowcase />
      <WorkFlow />
    </main>
  );
}
