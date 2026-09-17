import { useParams, Link } from "react-router";
import { blogPosts } from "@/data/blog";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export default function ArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy-900 mb-4">Article not found</h1>
          <Link to="/insights" className="text-teal-600 hover:underline">Back to insights</Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Insights", href: "/insights" }, { label: post.title }]} />
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-teal-600">{post.category}</span>
              <span className="text-gray-200">·</span>
              <span className="text-xs text-gray-400">{post.readTime} read</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-navy-900">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-medium text-navy-900">{post.author}</div>
                <div className="text-xs text-gray-400">
                  {post.authorRole} ·{" "}
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-72 sm:h-96 rounded-xl overflow-hidden bg-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-custom space-y-5">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return <h2 key={i} className="font-display text-2xl text-navy-900 mt-10 mb-3 first:mt-0">{para.slice(3)}</h2>;
            }
            if (para.startsWith("**") && para.endsWith("**")) {
              return <h3 key={i} className="text-sm font-semibold text-navy-900 mt-6">{para.slice(2, -2)}</h3>;
            }
            if (para.includes("**")) {
              const parts = para.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="text-gray-700 leading-relaxed text-base">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="font-semibold text-navy-900">{part}</strong> : part
                  )}
                </p>
              );
            }
            return <p key={i} className="text-gray-700 leading-relaxed text-base">{para}</p>;
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-navy-900 mb-8">More from Insights</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/insights/${p.slug}`}
                  className="group border border-gray-100 bg-white rounded-xl overflow-hidden hover:shadow-md transition-all flex"
                >
                  <div className="w-32 flex-shrink-0 overflow-hidden bg-gray-100">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-teal-600 font-medium">{p.category}</span>
                    <h3 className="text-sm font-medium text-navy-900 mt-1 group-hover:text-teal-700 transition-colors leading-snug">{p.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{p.readTime} read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Ready to discuss your project?"
        subheading="We'd be happy to talk through how the ideas in this article might apply to your organization."
      />
    </>
  );
}
