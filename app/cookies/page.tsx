import ReactMarkdown from "react-markdown";
import fs from "fs";

export const metadata = {
  title: "Cookies Policy",
};

export default function CookiesPage() {
  const markdown = fs.readFileSync("public/cookie_en.md", "utf-8");

  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookies Policy</h1>
      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
            h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
            h3: ({ ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
            p: ({ ...props }) => <p className="mb-4" {...props} />,
            ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 ml-4" {...props} />,
            ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 ml-4" {...props} />,
            li: ({ ...props }) => <li className="mb-1" {...props} />,
            a: ({ ...props }) => <a className="text-blue-600 underline hover:text-blue-800" {...props} />,
            strong: ({ ...props }) => <strong className="font-bold" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
