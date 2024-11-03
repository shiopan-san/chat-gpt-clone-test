"use client";

import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ChatInterfaceProps {
  selectedModel: string;
}

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function ChatInterface({ selectedModel }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "こんにちは！どうぞよろしくお願いします。今日はどのようなお手伝いをしましょうか？",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: "申し訳ありませんが、これはデモ用のインターフェースです。実際のAI応答は実装されていません。" },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex items-start gap-4 max-w-3xl mx-auto"
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div className="flex-1">
              <p className="text-neutral-200">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-neutral-800 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ChatGPT にメッセージを送信する"
              className={cn(
                "min-h-[60px] w-full bg-neutral-800 border-neutral-700 rounded-lg pr-12 resize-none",
                "focus-visible:ring-neutral-600"
              )}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-neutral-700"
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-neutral-500 mt-2 text-center">
            ChatGPT の回答は必ずしも正しいとは限りません。重要な情報は確認するようにしてください。
          </p>
        </div>
      </form>
    </div>
  );
}