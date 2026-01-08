"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const items = [
  { id: "one", label: 1 },
  { id: "two", label: 2 },
  { id: "three", label: 3 },
  { id: "four", label: 4 },
];

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <LayoutGroup>
      <div className="w-full h-screen p-4">
        <div
          className={`
            grid
            w-full
            h-full
            gap-4
            ${active === null
              ? "grid-cols-2 grid-rows-2"
              : "grid-cols-3 grid-rows-[2fr_1fr]"
            }
          `}
        >
          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                layoutId={`card-${item.id}`}
                onClick={() =>
                  setActive(isActive ? null : item.id)
                }
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`
                  rounded-xl
                  bg-indigo-500
                  cursor-pointer
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  ${active === null
                    ? "text-3xl"
                    : isActive
                    ? "col-span-3 row-start-1 text-5xl"
                    : "row-start-2 text-2xl"
                  }
                `}
              >
                {item.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </LayoutGroup>
  );
}
