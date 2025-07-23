import { useState } from 'react'
import {
  Clock,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  Share2,
  Bookmark,
  MessageSquare,
  Book,
  Home,
} from 'lucide-react'

// Blog posts data
const blogPosts = [
  {
    id: 'funding-company',
    category: ['Business', 'Finance', 'Entrepreneurship'],
    title: 'How to Start a Profitable Funding Company',
    subtitle:
      'A complete guide to building a scalable and high-income business in the financial services industry.',
    author: 'High Ticket Offer Financing',
    authorInitials: 'HT',
    date: 'May 10, 2025',
    readTime: '10 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Are you an entrepreneur seeking a lucrative opportunity in the financial services industry? Starting a funding company might be the perfect path to building a scalable and high-income business. With the right strategies, resources, and systems in place, you can tap into the multi-billion-dollar business funding market.',
      },
      {
        type: 'paragraph',
        text: "In this guide, we'll cover everything you need to know about starting a funding company, why it's a high-demand industry, and how High Ticket Offer Financing can help you fast-track your success.",
      },
      {
        type: 'heading',
        text: 'Why Start a Funding Company?',
      },
      {
        type: 'highlight-box',
        text: 'The need for business and personal funding has skyrocketed in recent years. Small businesses and entrepreneurs often face challenges accessing traditional bank loans, creating a massive demand for alternative funding solutions. By providing these solutions, you can:',
        items: [
          'Earn substantial commissions on every deal.',
          'Help businesses achieve their goals and grow.',
          'Build a scalable, recession-proof business.',
        ],
        icons: ['DollarSign', 'Users', 'Target'],
      },
      {
        type: 'heading',
        text: 'Key Steps to Starting a Business Funding Company',
      },
      {
        type: 'numbered-item',
        number: 1,
        title: 'Understand the Business Funding Industry',
        text: 'The funding industry includes services such as:',
        items: [
          '<strong>Merchant Cash Advances (MCAs):</strong> Short-term funding for businesses with consistent sales.',
          '<strong>Credit Lines:</strong> Flexible funding options for operational expenses.',
          '<strong>Invoice Factoring:</strong> Financing for businesses awaiting payment on invoices.',
          '<strong>Equipment Financing:</strong> Loans for purchasing necessary business tools and equipment.',
        ],
        endText:
          'Each funding solution caters to specific business needs, allowing you to offer tailored options to your clients.',
      },
      {
        type: 'numbered-item',
        number: 2,
        title: 'Choose a Niche and Target Market',
        text: 'Identify the industries or business types you want to serve. High-demand niches include:',
        items: [
          'E-commerce businesses',
          'Restaurants and retail stores',
          'Contractors and tradespeople',
        ],
        endText:
          'Specializing in a niche helps you position yourself as an expert and attract more clients.',
      },
      {
        type: 'promo-box',
        title: 'Why Partner with High Ticket Offer Financing?',
        text: "High Ticket Offer Financing is designed to help entrepreneurs build their own funding companies with ease. Here's what you'll get when you partner with us:",
        features: [
          {
            title: 'Comprehensive Coaching',
            desc: '1:1 weekly coaching calls to help you navigate the startup process.',
          },
          {
            title: 'On-Demand Support',
            desc: '24/7 AI assistant and personalized text/email support.',
          },
          {
            title: 'Client Acquisition Mastery',
            desc: 'Proven marketing strategies and step-by-step training.',
          },
          {
            title: 'White-Label Model',
            desc: 'Use our solutions under your own brand.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'How Much Can You Earn with a Funding Business?',
      },
      {
        type: 'paragraph',
        text: "The earning potential in the business funding industry is enormous. Here's an example:",
      },
      {
        type: 'earnings-box',
        items: [
          { label: 'Average deal size:', value: '$50,000' },
          { label: 'Your commission:', value: '5-10%' },
          { label: 'Profit per deal:', value: '$2,500–$5,000' },
        ],
        conclusion:
          "Close just 10 deals per month, and you're earning six figures annually. Scale up to 30+ deals per month, and you're running a 7-figure business.",
      },
      {
        type: 'heading',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'Starting a business funding company is one of the most profitable opportunities for entrepreneurs. By leveraging the resources and support from High Ticket Offer Financing, you can fast-track your success and create a scalable, recession-proof business.',
      },
      {
        type: 'cta-box',
        heading: 'Ready to get started?',
        text: 'Take the first step toward launching your 7-figure funding company today.',
        buttonText: 'Learn More About High Ticket Offer Financing',
      },
    ],
    relatedTopics: [
      'Business Funding',
      'Start a Funding Business',
      'Funding Solutions',
      'High-ticket Financing',
      'Small Business',
    ],
  },
  {
    id: 'god-first-business',
    category: ['Faith', 'Business', 'Christianity'],
    title:
      'Why Putting God at the Center of Your Business is the Key to True Success',
    subtitle:
      'Integrating faith into your business practices can lead to long-lasting success, personal fulfillment, and positive impact.',
    author: 'Faith-Driven Entrepreneur',
    authorInitials: 'FD',
    date: 'May 12, 2025',
    readTime: '8 min read',
    content: [
      {
        type: 'paragraph',
        text: "In today's fast-paced world, where businesses often prioritize profit over purpose, integrating faith and spirituality into your business practices can set you apart. For Christian entrepreneurs, placing God at the center of their business isn't just a moral decision---it's a strategy that leads to long-lasting success, personal fulfillment, and a positive impact on the world.",
      },
      {
        type: 'paragraph',
        text: "This article explores why acknowledging God's role in your business is essential, how it can transform your work culture, and practical steps to build a faith-driven business.",
      },
      {
        type: 'heading',
        text: 'Why God Should Be at the Heart of Your Business',
      },
      {
        type: 'numbered-item',
        number: 1,
        title: 'God Provides Divine Guidance',
        text: 'The Bible teaches us to seek God in all that we do:',
        quote:
          '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." — Proverbs 3:5-6',
        endText:
          "When you invite God into your business decisions, you're no longer relying solely on human wisdom. Prayer and discernment can help you navigate challenges, identify opportunities, and make ethical choices that honor Him.",
      },
      {
        type: 'numbered-item',
        number: 2,
        title: 'Business Becomes a Ministry',
        text: "Your business can be more than a source of income---it can be a platform to serve others and glorify God. Whether it's through ethical practices, supporting your community, or sharing your faith with employees and clients, your business can become a ministry that reflects God's love.",
      },
      {
        type: 'numbered-item',
        number: 3,
        title: "God's Principles Build Strong Foundations",
        text: 'Biblical values like honesty, integrity, humility, and stewardship create a strong foundation for any business. Companies that prioritize these principles often foster trust, attract loyal customers, and retain talented employees.',
      },
      {
        type: 'heading',
        text: 'The Benefits of a God-Centered Business',
      },
      {
        type: 'numbered-item',
        number: 1,
        title: 'Peace in the Midst of Challenges',
        text: 'Running a business comes with its share of stress and uncertainty. When you rely on God, you can experience peace that surpasses understanding, even in difficult times. Philippians 4:6-7 reminds us:',
        quote:
          '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."',
      },
      {
        type: 'numbered-item',
        number: 2,
        title: 'Divine Favor and Provision',
        text: 'Placing God first invites His favor and provision into your business. Matthew 6:33 encourages us to:',
        quote:
          '"Seek first his kingdom and his righteousness, and all these things will be given to you as well."',
        endText:
          'When you honor God in your work, He will bless your efforts and open doors you never imagined.',
      },
      {
        type: 'numbered-item',
        number: 3,
        title: 'A Purpose Beyond Profit',
        text: "Businesses centered on God don't measure success solely by revenue. Instead, success is defined by how well the business fulfills its God-given purpose, impacts lives, and furthers His kingdom.",
      },
      {
        type: 'heading',
        text: 'How to Incorporate God into Your Business',
      },
      {
        type: 'numbered-item',
        number: 1,
        title: 'Start with Prayer',
        text: 'Begin every day with prayer, asking God for wisdom, clarity, and strength to make decisions that honor Him. Pray for your employees, customers, and business partners.',
      },
      {
        type: 'numbered-item',
        number: 2,
        title: 'Align Your Business with Biblical Values',
        text: 'Evaluate your business practices and policies. Are they aligned with biblical principles? Areas to consider include:',
        items: [
          'Treating employees with respect and fairness.',
          'Maintaining honesty in your marketing and sales strategies.',
          'Being a good steward of your resources.',
        ],
      },
      {
        type: 'numbered-item',
        number: 3,
        title: 'Create a Faith-Based Work Culture',
        text: 'Encourage a culture of faith within your business by:',
        items: [
          'Hosting prayer meetings or Bible studies for employees.',
          'Offering flexible schedules that respect Sabbath and worship times.',
          "Supporting charitable causes that reflect God's heart.",
        ],
      },
      {
        type: 'numbered-item',
        number: 4,
        title: 'Give Generously',
        text: "Tithing and generosity are powerful ways to acknowledge God's provision. Dedicate a portion of your profits to support ministries, missionaries, or local charities.",
      },
      {
        type: 'numbered-item',
        number: 5,
        title: 'Trust God with the Results',
        text: "Success in business isn't always immediate, but when you place your trust in God, you can rest assured that His plans are perfect and His timing is flawless.",
      },
      {
        type: 'heading',
        text: 'Real-Life Examples of God-Centered Businesses',
      },
      {
        type: 'paragraph',
        text: "Many successful entrepreneurs attribute their achievements to their faith in God. From Chick-fil-A's commitment to closing on Sundays to Hobby Lobby's mission-driven leadership, these businesses demonstrate how faith-driven principles lead to long-term success.",
      },
      {
        type: 'heading',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: "Incorporating God into your business isn't just about achieving financial success; it's about fulfilling your divine calling, serving others, and building a legacy that glorifies Him.",
      },
      {
        type: 'paragraph',
        text: 'When you trust God as your ultimate CEO, you gain clarity, confidence, and purpose in your entrepreneurial journey. As Matthew 5:16 reminds us:',
      },
      {
        type: 'quote',
        text: '"Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."',
      },
      {
        type: 'paragraph',
        text: 'Are you ready to invite God into your business? Start today, and watch how He transforms your efforts into something extraordinary.',
      },
    ],
    relatedTopics: [
      'God in business',
      'Christian entrepreneurs',
      'Faith-based businesses',
      'Biblical principles for success',
      'How to glorify God in business',
    ],
  },
]

// Component to render a blog post
const BlogPost = ({ post, onBookmark, isBookmarked }) => {
  // Color theme based on post ID
  const theme = post.id === 'funding-company' ? '#E7A647' : '#6B46C1'

  // Function to render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p
            key={index}
            className={`${index === 0 ? 'text-xl' : 'text-lg'} leading-relaxed text-gray-700 ${index > 0 ? 'mt-4' : ''}`}
          >
            {item.text}
          </p>
        )

      case 'heading':
        return (
          <h2
            key={index}
            className="mb-4 mt-10 text-2xl font-bold text-gray-800"
          >
            {item.text}
          </h2>
        )

      case 'highlight-box':
        return (
          <div
            key={index}
            className={`bg-[${theme}]/50 my-6 rounded-xl border-l-4 p-6 border-[${theme}]`}
          >
            <p className="text-gray-700">{item.text}</p>
            {item.items && (
              <ul className="mt-4 space-y-2">
                {item.items.map((listItem, i) => (
                  <li key={i} className="flex items-start">
                    {item.icons && item.icons[i] === 'DollarSign' && (
                      <DollarSign
                        className={`mr-2 text-[${theme}] mt-1 flex-shrink-0`}
                        size={18}
                      />
                    )}
                    {item.icons && item.icons[i] === 'Users' && (
                      <Users
                        className={`mr-2 text-[${theme}] mt-1 flex-shrink-0`}
                        size={18}
                      />
                    )}
                    {item.icons && item.icons[i] === 'Target' && (
                      <Target
                        className={`mr-2 text-[${theme}] mt-1 flex-shrink-0`}
                        size={18}
                      />
                    )}
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )

      case 'numbered-item':
        return (
          <div key={index} className="my-6 flex">
            {item.number && (
              <div
                className={`flex-shrink-0 bg-[${theme}] mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full text-white`}
              >
                {item.number}
              </div>
            )}
            <div>
              {item.title && (
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              )}
              {item.text && <p className="mt-2 text-gray-700">{item.text}</p>}
              {item.quote && (
                <div className="my-3 border-l-4 border-gray-300 pl-4 italic text-gray-600">
                  {item.quote}
                </div>
              )}
              {item.items && (
                <ul className="mt-3 space-y-2 text-gray-700">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight
                        className={`mr-2 text-[${theme}] mt-1 flex-shrink-0`}
                        size={16}
                      />
                      <span dangerouslySetInnerHTML={{ __html: listItem }} />
                    </li>
                  ))}
                </ul>
              )}
              {item.endText && (
                <p className="mt-3 text-gray-700">{item.endText}</p>
              )}
            </div>
          </div>
        )

      case 'promo-box':
        return (
          <div
            key={index}
            className="border-[${theme}] my-8 rounded-2xl border bg-black p-8"
          >
            <h3 className={`text-xl font-bold text-[${theme}] mb-4`}>
              {item.title}
            </h3>
            <p className="mb-4 text-white">{item.text}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {item.features.map((feature, i) => (
                <div key={i} className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className={`font-semibold text-[${theme}]`}>
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'earnings-box':
        return (
          <div
            key={index}
            className="my-4 rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <div className="space-y-3">
              {item.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between ${i < item.items.length - 1 ? 'border-b border-gray-200 pb-2' : 'pb-2'}`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className={`font-bold text-[${theme}]`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-700">{item.conclusion}</p>
          </div>
        )

      case 'cta-box':
        return (
          <div
            key={index}
            className="mt-10 rounded-xl bg-black p-6 text-center text-white"
          >
            <h3 className="mb-2 text-xl font-bold">{item.heading}</h3>
            <p className="mb-4">{item.text}</p>
            <button
              className={`rounded-lg bg-white px-6 py-2 font-medium text-black hover:bg-[${theme}] transition hover:text-white`}
            >
              {item.buttonText}
            </button>
          </div>
        )

      case 'quote':
        return (
          <div
            key={index}
            className="my-6 border-l-4 border-gray-300 pl-4 italic text-gray-600"
          >
            {item.text}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div>
      {/* Header */}
      <header className={`rounded-b-3xl bg-black px-6 py-16 shadow-lg`}>
        <div className="mx-auto max-w-3xl text-white">
          <div className="mb-4 flex items-center space-x-2 text-white">
            {post.category.map((cat, i) => (
              <span
                key={i}
                className={`bg-[${theme}] rounded-full px-3 py-1 text-sm font-medium`}
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-bold uppercase">{post.title}</h1>
          <p className="mb-6 text-xl opacity-90">{post.subtitle}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`h-12 w-12 rounded-full bg-[${theme}] flex items-center justify-center text-xl font-bold`}
              >
                {post.authorInitials}
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <div className="flex items-center text-sm text-blue-100">
                  <Clock size={14} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="rounded-full bg-white bg-opacity-20 p-2 transition hover:bg-opacity-30">
                <Share2 size={20} />
              </button>
              <button
                className={`${isBookmarked ? `bg-[${theme}]` : 'bg-white bg-opacity-20'} rounded-full p-2 transition hover:bg-opacity-30`}
                onClick={() => onBookmark(post.id)}
              >
                <Bookmark size={20} fill={isBookmarked ? 'white' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <section className="prose prose-lg max-w-none">
          {post.content.map((item, index) => renderContent(item, index))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 rounded-t-3xl bg-black/5 px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Share this article
            </h3>
            <div className="flex space-x-3">
              <button className="hover:bg-[${theme}] rounded-full bg-black/15 p-2 text-black transition">
                <Share2 size={20} />
              </button>
              <button className="hover:bg-[${theme}] rounded-full bg-black/15 p-2 text-black transition">
                <MessageSquare size={20} />
              </button>
              <button
                className={`${isBookmarked ? `bg-[${theme}] text-white` : 'bg-black/15 text-black'} rounded-full p-2 hover:bg-[${theme}] transition`}
                onClick={() => onBookmark(post.id)}
              >
                <Bookmark size={20} fill={isBookmarked ? 'white' : 'none'} />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.relatedTopics.map((topic, i) => (
                <span
                  key={i}
                  className="cursor-pointer rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Blog listing component
const BlogListing = ({ posts, onSelectPost }) => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pt-16 font-sans">
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        <div className="flex space-x-4">
          <button className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
            <Book size={20} />
          </button>
          <button className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200">
            <Home size={20} />
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition hover:shadow-lg"
            onClick={() => onSelectPost(post.id)}
          >
            <div
              className={`h-3 w-full ${post.id === 'funding-company' ? 'bg-[#E7A647]' : 'bg-[#6B46C1]'}`}
            ></div>
            <div className="p-6">
              <div className="mb-3 flex items-center space-x-2">
                {post.category.slice(0, 2).map((cat, i) => (
                  <span
                    key={i}
                    className={`${post.id === 'funding-company' ? 'bg-[#E7A647]/20 text-[#E7A647]' : 'bg-[#6B46C1]/20 text-[#6B46C1]'} rounded px-2 py-1 text-xs font-medium`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {post.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                {post.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className={`h-8 w-8 rounded-full ${post.id === 'funding-company' ? 'bg-[#E7A647]' : 'bg-[#6B46C1]'} flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {post.authorInitials}
                  </div>
                  <div className="text-xs text-gray-500">
                    {post.date} • {post.readTime}
                  </div>
                </div>
                <button
                  className={`${post.id === 'funding-company' ? 'text-[#E7A647]' : 'text-[#6B46C1]'} text-sm font-medium`}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main component
export default function MultiPostBlog() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([])
  const [currentView, setCurrentView] = useState('listing') // 'listing' or postId

  const handleBookmark = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter((id) => id !== postId))
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId])
    }
  }

  const handleSelectPost = (postId) => {
    setCurrentView(postId)
  }

  const handleBackToListing = () => {
    setCurrentView('listing')
  }

  // Render the appropriate view
  if (currentView === 'listing') {
    return <BlogListing posts={blogPosts} onSelectPost={handleSelectPost} />
  } else {
    const currentPost = blogPosts.find((post) => post.id === currentView)
    if (!currentPost) return null

    return (
      <div className="mx-auto min-h-screen max-w-7xl bg-white font-sans">
        <button
          onClick={handleBackToListing}
          className="fixed left-4 top-4 z-10 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100"
        >
          <Home size={24} />
        </button>
        <BlogPost
          post={currentPost}
          onBookmark={handleBookmark}
          isBookmarked={bookmarkedPosts.includes(currentPost.id)}
        />
      </div>
    )
  }
}
