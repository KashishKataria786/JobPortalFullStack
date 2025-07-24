
import Layout from "../components/Layout/Layout.jsx";

export default function HomePage() {
  return (
    <Layout className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Find Your <span className="text-blue-600">Dream Job</span> Today
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Search thousands of listings from top companies worldwide
        </p>

        {/* Search */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 md:gap-2">
          <input
            type="text"
            placeholder="Job title, keyword..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Popular Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Engineering", "Marketing", "Design", "Sales", "HR", "Finance", "Product", "Customer Support"].map((cat) => (
            <div key={cat} className="bg-white shadow-sm border border-gray-200 p-4 rounded-lg text-center hover:shadow-md transition">
              <h3 className="font-medium text-gray-700">{cat}</h3>
              <p className="text-sm text-gray-500 mt-2">1,200+ jobs</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">Top Companies Hiring Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Google", "Amazon", "Adobe", "Netflix"].map((company) => (
            <div key={company} className="bg-white border rounded-xl p-4 text-center shadow hover:shadow-lg transition">
              <img
                src={`https://logo.clearbit.com/${company.toLowerCase()}.com`}
                alt={company}
                className="h-10 mx-auto mb-4"
              />
              <h4 className="font-semibold text-gray-800">{company}</h4>
              <p className="text-sm text-gray-500">120+ Openings</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial / Success Story */}
      <section className="py-20 px-6 text-center bg-white">
        <blockquote className="max-w-2xl mx-auto text-xl italic text-gray-600 mb-4">
          “Thanks to OffverseJobs, I landed my dream role in less than a month! The platform made it easy to connect with recruiters.”
        </blockquote>
        <p className="font-semibold text-gray-800">— Aditi Sharma, Product Designer</p>
      </section>

      {/* CTA for Recruiters */}
      <section className="bg-blue-600 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Hire Top Talent Today</h2>
        <p className="mb-6 text-lg">Join thousands of companies using OffverseJobs to hire the best candidates.</p>
        <a
          href="/post-job"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Post a Job
        </a>
      </section>
    </Layout>
  );
}
