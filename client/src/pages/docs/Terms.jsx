const Terms = () => (
  <main className="max-w-2xl mx-auto mt-8 mb-8 px-4 py-8 bg-gray-50 shadow rounded-none font-sans">
    <h1 className="text-3xl font-bold mb-2 tracking-tight">Terms of Service</h1>
    <p className="text-sm text-gray-500">Effective Date: 29 Aug 2025</p>
    <p className="mt-5 mb-7 text-gray-700">
      Welcome to Hive “Searchable Memory for Teams”. By using our service, you
      agree to the following terms:
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      1. Use of Service
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        You may use the service to create a searchable knowledge layer for your
        team.
      </li>
      <li>
        You must provide accurate information when authorizing third-party
        services.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      2. Account Authorization
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        Our service requires access to third-party tools (Slack, Notion, Google
        Docs, GitHub) to function.
      </li>
      <li>
        You are responsible for authorizing access and managing permissions.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      3. User Data
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>You retain ownership of your data.</li>
      <li>
        By using the service, you consent to allow us to process, store, and
        display your data as described in our Privacy Policy.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      4. Prohibited Uses
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>You may not use the service to:</li>
      <li className="ml-6">Violate any law or regulation.</li>
      <li className="ml-6">
        Access or use data you are not authorized to access.
      </li>
      <li className="ml-6">
        Attempt to reverse-engineer or disrupt the service.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      5. Disclaimer
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>The service is provided “as is” without warranties of any kind.</li>
      <li>We do not guarantee 100% accuracy of search results.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      6. Limitation of Liability
    </h2>
    <p className="mb-6 text-gray-700">
      We are not liable for any damages arising from use or inability to use the
      service.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      7. Termination
    </h2>
    <ul className="list-disc pl-6 mb-6 text-gray-700">
      <li>
        We may suspend or terminate your access if you violate these terms.
      </li>
      <li>
        You may delete your account at any time, which will remove your data
        from our system.
      </li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      8. Changes to Terms
    </h2>
    <p className="mb-6 text-gray-700">
      We may update these terms occasionally. Continued use of the service
      constitutes acceptance of the updated terms.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-900">
      9. Contact
    </h2>
    <p className="mb-2 text-gray-700">
      For questions, contact us at:{" "}
      <a
        className="text-blue-600 hover:underline"
        href="mailto:echo.hive404@gmail.com"
      >
        echo.hive404@gmail.com
      </a>
    </p>
  </main>
);

export default Terms;
