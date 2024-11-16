import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/write-story")({
  component: WriteStoryPage,
});

// Theme configuration with dark mode support
const theme = {
  paragraph: "mb-2 text-base leading-relaxed",
  root: "p-4 min-h-[50vh] focus:outline-none",
  placeholder:
    "overflow-hidden absolute text-base select-none pointer-events-none dark:text-gray-400 text-gray-500",
};

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const buttons = [
    { icon: "B", command: "bold", className: "font-bold" },
    { icon: "I", command: "italic", className: "italic" },
    { icon: "U", command: "underline", className: "underline" },
    { icon: "S", command: "strikethrough", className: "line-through" },
    {
      icon: "H",
      command: "highlight",
      className: "bg-yellow-200/50",
    },
    { icon: "</>", command: "code", className: "font-mono" },
    { icon: "↓", command: "subscript", className: "" },
    { icon: "↑", command: "superscript", className: "" },
  ];

  return (
    <div className="flex gap-2 p-2 border-b dark:border-gray-700">
      {buttons.map((button) => (
        <Button
          variant="ghost"
          key={button.command}
          onClick={() =>
            editor.dispatchCommand(
              FORMAT_TEXT_COMMAND,
              button.command as TextFormatType
            )
          }
          className={`${button.className} px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 
            dark:text-gray-200 transition-colors`}
        >
          {button.icon}
        </Button>
      ))}
    </div>
  );
}

function AutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the component mounts
    editor.focus();
  }, [editor]);

  return null;
}

function WriteStoryPage() {
  const [editorState, setEditorState] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const initialConfig = {
    namespace: "StoryEditor",
    theme,
    onError: (error: Error) => console.error(error),
  };

  function onChange(editorState: any) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Submitted content:", editorState);
      // Here you would normally send editorState to your backend
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`min-h-screen`}>
      <div
        className={`sticky top-0 z-10 border-b ${isDark ? " border-gray-700" : " border-gray-200"}`}
      >
        <div className="container mx-auto px-4 py-3">
          <h1
            className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Write Story
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <LexicalComposer initialConfig={initialConfig}>
          <div
            className={`relative min-h-[60vh] mt-4 rounded-lg border ${
              isDark
                ? "border-gray-700 text-gray-100"
                : "border-gray-200 text-gray-900"
            }`}
          >
            <ToolbarPlugin />
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="min-h-[60vh] px-4 py-4" />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={onChange} />
            <AutoFocusPlugin />
          </div>
        </LexicalComposer>

        <div className="mt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-lg font-medium
              ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
