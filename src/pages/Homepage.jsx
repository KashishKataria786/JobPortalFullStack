import Layout from "../components/Layout/Layout.jsx";

export default function HomePage() {
  return (
    <Layout className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-800">
          Find Your <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">Dream Job</span> Today
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore listings from top companies across industries.
        </p>

        {/* Search */}
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 md:gap-2">
          <input
            type="text"
            placeholder="Job title, keyword..."
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>
{/* Marquee Section */}
<section className="bg-white py-12 overflow-hidden border-t border-gray-100">
  <div className="whitespace-nowrap overflow-hidden relative">
    <div className="inline-block animate-marquee">
      {[...Array(2)].flatMap(() =>
        [
          "google.com",
          "amazon.com",
          "adobe.com",
          "netflix.com",
          "microsoft.com",
          "meta.com",
          "airbnb.com",
          "intel.com",
        ].map((domain, idx) => (
          <div
            key={`${domain}-${idx}`}
            className="inline-block w-44 mx-6 bg-gray-50 rounded-xl shadow p-4 text-center"
          >
            <img
              src={`https://logo.clearbit.com/${domain}`}
              alt={domain}
              className="h-30 mx-auto hover:grayscale-0 transition"
            />
          </div>
        ))
      )}
    </div>
  </div>
</section>
{/* Job Listings Section */}
<section className="bg-gray-50 py-20 px-6 text-left">
  <h2 className="text-3xl font-bold text-center mb-12">Latest Job Posts</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      {
        company: "Google",
        title: "Frontend Developer",
        location: "Bangalore, India",
        salary: "₹18 - ₹25 LPA",
      },
      {
        company: "Netflix",
        title: "UI/UX Designer",
        location: "Remote",
        salary: "₹12 - ₹20 LPA",
      },
      {
        company: "Adobe",
        title: "Full Stack Engineer",
        location: "Gurgaon, India",
        salary: "₹15 - ₹22 LPA",
      },
      {
        company: "Amazon",
        title: "DevOps Engineer",
        location: "Hyderabad, India",
        salary: "₹20 - ₹30 LPA",
      },
      {
        company: "Adobe",
        title: "Full Stack Engineer",
        location: "Gurgaon, India",
        salary: "₹15 - ₹22 LPA",
      },
      {
        company: "Amazon",
        title: "DevOps Engineer",
        location: "Hyderabad, India",
        salary: "₹20 - ₹30 LPA",
      },
    ].map((job, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`https://logo.clearbit.com/${job.company.toLowerCase()}.com`}
            alt={job.company}
            className="h-10 w-10 rounded"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              {job.title}
            </h4>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>📍</strong> {job.location}</p>
          <p><strong>💰</strong> {job.salary}</p>
        </div>
        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
          View Job
        </button>
      </div>
    ))}
  </div>
</section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Job Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "Engineering",
            "Marketing",
            "Design",
            "Sales",
            "Human Resources",
            "Finance",
            "Product",
            "Support"
          ].map((cat, i) => (
            <div
              key={cat}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 text-center hover:shadow-md hover:scale-105 transition-transform duration-200"
            >
              <h3 className="font-semibold text-gray-700">{cat}</h3>
              <p className="text-sm text-gray-500 mt-2">1,200+ jobs</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Top Companies Hiring Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Google", "Amazon", "Adobe", "Netflix"].map((company) => (
            <div
              key={company}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-xl transition"
            >
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
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <blockquote className="text-xl md:text-2xl italic text-gray-600 mb-6">
            “Thanks to OffverseJobs, I landed my dream role in less than a month! The platform made it so simple to connect with recruiters.”
          </blockquote>
          <p className="font-semibold text-gray-800">— Aditi Sharma, Product Designer</p>
        </div>
      </section>

      {/* CTA for Recruiters */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-24 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hire Top Talent, Fast</h2>
        <p className="mb-6 text-lg">Join 10,000+ companies already hiring on OffverseJobs</p>
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
