"use client";

import {
  SiAirtable,
  SiAnthropic,
  SiGithub,
  SiHuggingface,
  SiLangchain,
  SiLinear,
  SiMake,
  SiN8n,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiZapier,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { TOOLS } from "@/lib/data";

// Named imports only: `import * as Si` bundles all ~3,000 icons (~2 MB)
const ICONS: Record<string, React.ElementType> = {
  SiAirtable,
  SiAnthropic,
  SiGithub,
  SiHuggingface,
  SiLangchain,
  SiLinear,
  SiMake,
  SiN8n,
  SiNextdotjs,
  SiNotion,
  SiPostgresql,
  SiPython,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiZapier,
};

export function ToolsBar() {
  const items = [...TOOLS, ...TOOLS];

  return (
    <section className="border-y border-border/60 bg-surface/30 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div
          className="flex w-max animate-marquee gap-x-10 hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {items.map((t, i) => {
            const Icon = t.icon ? ICONS[t.icon] : null;
            return Icon ? (
              <span
                key={i}
                title={t.label}
                className="text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                <Icon size={22} />
              </span>
            ) : null;
          })}
        </div>
      </motion.div>
    </section>
  );
}
