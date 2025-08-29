import { ArrowRight, Check, Lock, Paperclip, Rocket } from "lucide-react";

const HomePage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    {/* Header & Logo */}
    <header className="w-full flex items-center py-8 px-4 bg-white shadow rounded-none">
      {/* Logo example: stylized wordmark, replace <span> with your icon if desired */}
      <span className="text-2xl font-bold tracking-tight">
        <span className="font-extrabold text-amber-600">Hi</span>ve
      </span>
    </header>

    {/* Hero Section */}
    <main className="flex-1 flex flex-col justify-center items-center px-4">
      <section className="w-full max-w-2xl text-center mt-10 mb-12">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
          Search Across All Your Team Tools, Instantly.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Teams today juggle multiple platforms—Slack, Notion, Google Docs,
          GitHub, Drive—and vital knowledge often gets lost.
          <br />
          <span className="block mt-3">
            Hive creates a unified, AI-powered knowledge layer that lets your
            team search across all these tools in one place.
            <br />
            Ask questions naturally, get context-rich results, and reclaim hours
            of productivity.
          </span>
        </p>
        <div className="mb-9">
          <span className="text-xl font-semibold text-amber-600">
            <ArrowRight className="inline-block w-6 h-6" /> Coming Soon – 7th
            September
          </span>
          <p className="mt-2 text-gray-700">
            Sign up to be the first to access{" "}
            <span className="font-bold">Hive</span>.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-8">
          <div className="flex items-center space-x-2">
            <Check className="inline-block w-6 h-6" />
            <span className="text-gray-800">Seamless Integration</span>
          </div>
          <div className="flex items-center space-x-2">
            <Rocket className="inline-block w-6 h-6" />
            <span className="text-gray-800">AI-Powered Search</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-6 h-6 text-yellow-600">
              <Paperclip />
            </span>
            <span className="text-gray-800">Context-Rich Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="inline-block w-6 h-6" />
            <span className="text-gray-800">Secure & Private</span>
          </div>
        </div>
      </section>
    </main>
    {/* Footer */}
    <footer className="w-full bg-white mt-auto py-5 px-4 shadow rounded-none text-center text-sm text-gray-600">
      <nav className="mb-2">
        <a className="mx-2 hover:underline" href="/privacy">
          Privacy Policy
        </a>
        <span>|</span>
        <a className="mx-2 hover:underline" href="/terms">
          Terms of Service
        </a>
        <span>|</span>
        <a className="mx-2 hover:underline" href="/contact">
          Contact
        </a>
      </nav>
      <div>© 2025 Hive. All Rights Reserved.</div>
    </footer>
  </div>
);

export default HomePage;
