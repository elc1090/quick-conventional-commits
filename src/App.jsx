import React, { useState } from "react";
import { Card } from "./components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const commitTypes = [
  { type: "feat", description: "Commit de novas funcionalidades (mesmo que ainda em desenvolvimento).", example: ["feat: fetch product list with pagination", "feat: add dark mode toggle", "feat: create footer", "feat: add style to product filter"]},
  { type: "chore", description: "Commits de manutenção do projeto (dependências, configurações, etc.)", example: ["chore: update dependencies", "chore: create project structure"]},
  { type: "fix", description: "Commit com intenção de corrigir bugs.", example: ["fix: adjust responsiveness", "fix: correct query parameters for search endpoint", "fix: resolve CSS bug causing buttons to misalign in mobile view"]},
  { type: "refactor", description: "Commit para melhorar código, sem impacto em funcionalidades ou bugs.", example: ["refactor: remove unused images", "refactor: rename const variables in App.jsx"]},
  { type: "docs", description: "Commit de documentação.", example: ["docs: update README with usage examples", "docs: add deploy URL"]}
];

export default function App() {
  const [activeType, setActiveType] = useState(null);

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          (Quick) Conventional Commits
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          {commitTypes.map((ct) => (
            <Card key={ct.type} onClick={() => setActiveType(activeType === ct.type ? null : ct.type)}>
              <h2 className="text-xl font-mono">{ct.type}:</h2>
              <p className="mt-2 text-sm text-gray-300">{ct.description}</p>

              <AnimatePresence>
                {activeType === ct.type && (
                  <motion.div
                    className="mt-4 bg-gray-800 p-4 rounded shadow-inner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-sm font-semibold text-gray-200">Examples</h3>
                    {ct.example.map((item, index) => (
                      <code
                        key={index}
                        className="block mt-1 bg-gray-700 p-2 rounded text-blue-400 font-mono text-sm"
                      >
                        {item}
                      </code>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm mt-10">
      <p>Learn more on <a href="https://www.conventionalcommits.org">conventionalcommits.org</a></p>
      <p>Made with ❤️ by <a href="https://github.com/andreainfufsm">andreainfufsm</a></p>
      </footer>
    </div>
  );
}