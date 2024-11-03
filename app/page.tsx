"use client";

import { useState } from "react";
import ChatInterface from "@/components/ChatInterface";
import ModelSelector from "@/components/ModelSelector";
import { Bot } from "lucide-react";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState("gpt-4o-2024-08-06");

  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white">
      <header className="border-b border-neutral-800 p-4">
        <ModelSelector 
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />
      </header>
      <ChatInterface selectedModel={selectedModel} />
    </div>
  );
}