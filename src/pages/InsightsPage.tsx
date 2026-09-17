import { Link } from "react-router";
import { blogPosts } from "@/data/blog";

export default function InsightsPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Insights</p>
          <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
            Perspectives on technology and business operations
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Practical writing on software development, automation, data analytics and technology for organizations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="group border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="h-52 overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-teal-600">{post.category}</span>
                  <span className="text-gray-200">·</span>
                  <span className="text-xs text-gray-400">{post.readTime} read</span>
                </div>
                <h2 className="text-base font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.author}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
