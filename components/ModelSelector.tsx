"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (model: string) => void;
}

const models = [
  {
    id: "gpt-4o-2024-08-06",
    name: "GPT-4o 2024-08-06",
    description: "ほとんどのタスクに最適です",
  },
  {
    id: "gpt-4o-mini-2024-07-18",
    name: "GPT-4o Mini 2024-07-18",
    description: "推論がスピードアップ",
  },
];

export default function ModelSelector({ selectedModel, onModelSelect }: ModelSelectorProps) {
  const currentModel = models.find(model => model.id === selectedModel);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-sm hover:bg-neutral-800 px-3 py-1.5 rounded-lg transition-colors">
        {currentModel?.name}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-800 border-neutral-700">
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => onModelSelect(model.id)}
            className="flex flex-col items-start gap-1 px-4 py-2 hover:bg-neutral-700 cursor-pointer"
          >
            <div className="font-medium">{model.name}</div>
            <div className="text-sm text-neutral-400">{model.description}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}