const Privacy = () => (
  <main className="max-w-2xl mx-auto mt-8 mb-8 px-4 py-8 bg-gray-50 shadow rounded-none font-sans">
    <h1 className="text-3xl font-bold mb-2 tracking-tight">Privacy Policy</h1>
    <p className="text-sm text-gray-500">Effective Date: 29th Aug 2025</p>
    <p className="mt-5 mb-7 text-gray-700">
      Hive is committed to protecting your privacy. This Privacy Policy explains
      how we collect, use, and share your information when you use our service
      &quot;Searchable Memory for Teams&quot;.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      1. Information We Collect
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        Account Information: Name, email address, and workspace details when you
        authorize third-party services (Slack, Notion, Google Docs, GitHub).
      </li>
      <li>
        Content Data: Documents, messages, and other information you authorize
        us to access for building searchable AI knowledge layers.
      </li>
      <li>
        Usage Data: How you interact with the platform (e.g., queries made,
        results viewed).
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      2. How We Use Your Data
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>Build a unified, searchable knowledge base for your team.</li>
      <li>Respond to natural language queries and display relevant results.</li>
      <li>Improve and maintain the service.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      3. How We Store Your Data
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        Embeddings or processed data may be stored locally or in a secure vector
        database (Pinecone, Weaviate, or Milvus).
      </li>
      <li>We do not sell your personal or workspace data to third parties.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      4. Third-Party Services
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        We may access third-party services like Slack, Notion, Google Docs, and
        GitHub via their APIs.
      </li>
      <li>
        By authorizing these services, you consent to share the necessary data
        for the service to function.
      </li>
      <li>Third-party services have their own privacy policies.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      5. Data Security
    </h2>
    <p className="mb-6 text-gray-700">
      We implement reasonable security measures to protect your data, but no
      method of transmission or storage is 100% secure.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      6. Your Rights
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>You can revoke access to your third-party accounts at any time.</li>
      <li>You may request deletion of your data from our system.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      7. Changes to this Policy
    </h2>
    <p className="mb-6 text-gray-700">
      We may update this Privacy Policy occasionally. Changes will be posted on
      this page.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      8. Contact Us
    </h2>
    <p className="mb-2 text-gray-700">
      For questions or concerns, email us at:{" "}
      <a
        className="text-blue-600 hover:underline"
        href="mailto:echo.hive404@gmail.com"
      >
        echo.hive404@gmail.com
      </a>
    </p>
  </main>
);

export default Privacy;
