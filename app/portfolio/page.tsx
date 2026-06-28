export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Theertha P Nair</h1>
          <p className="text-lg text-gray-600">CSE Engineering Student · AMC Engineering College, Bengaluru</p>
          <p className="text-gray-500 mt-2">Building full-stack and AI/ML applications</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid gap-6">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-600 mb-1">Resume Builder</h3>
            <p className="text-gray-600 mb-3">A free, clean resume builder with live preview and PDF download. Built with Next.js and Tailwind CSS.</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">View Tool</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-600 mb-1">AssetFlow</h3>
            <p className="text-gray-600">Employee inventory management system with role-based access control. Built for tracking and managing organizational assets.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-600 mb-1">ClearLedger AI</h3>
            <p className="text-gray-600">Personal finance and fraud detection tool powered by machine learning. Tracks spending and flags suspicious transactions.</p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>theerthapnair06@email.com · <a href="https://github.com/theertha-nair" className="text-blue-500 hover:underline">github.com/theertha-nair</a></p>
          <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">Built for Digital Heroes</a>
        </div>
      </div>
    </main>
  )
}
