
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Clock3, X } from "lucide-react";
import "./BlogSection.css";

// Blog images
import ssdAcademyImage from "../../images/ssd-academy.png";
import choosingGymnasticsImage from "../../images/choosing-gymnastics.png";
import gymnasticsBenefitsImage from "../../images/gymnastics-benefits.png";
import rightAgeGymnasticsImage from "../../images/right-age-gymnastics.png";

const articles = [
  {
    id: 1,
    category: "About SSD",
    title: "Why Choose SSD Sport Academy?",
    excerpt:
      "Discover what makes SSD Sport Academy a supportive place for children to learn, train and grow through gymnastics.",
    readTime: "4 min read",
    image: ssdAcademyImage,
    content: [
      {
        heading: "A place where children grow through gymnastics",
        paragraphs: [
          "Choosing the right sports academy is an important decision for every parent. At SSD Sport Academy, children get an opportunity to develop their physical abilities, confidence and discipline through structured gymnastics training.",
          "Our programs are designed for toddlers, children and teenagers, with training that considers each child's age, ability and learning pace.",
        ],
      },
      {
        heading: "Experienced and dedicated coaching",
        paragraphs: [
          "Our coaching team brings experience in artistic and acrobatic gymnastics. Head Coach Somesh Daterao is NIS certified, has a national-level gymnastics background and more than 10 years of coaching experience.",
          "Senior Coach Siddhant Yadav has represented India at the 19th Asian Acrobatic Gymnastics Championship in Uzbekistan and has over six years of experience. Pavan Daterao, a former senior coach, also contributed his experience to the academy.",
        ],
      },
      {
        heading: "A focus on safety and development",
        paragraphs: [
          "Children learn through age-appropriate activities, supervised practice and progressive skill development. Training includes warm-ups, balance, core strength, flexibility, floor exercises, tumbling and gymnastics apparatus.",
          "A supportive training environment helps children build coordination, confidence, concentration and teamwork while learning at their own pace.",
        ],
      },
      {
        heading: "Visit SSD Sport Academy",
        paragraphs: [
          "We are located at Pruthvi Sports Zone, behind Dhanori M.S.E.B. Office, Kamal Park, Dhanori, Pune.",
          "Parents are welcome to enquire about our programs and book a free trial class to experience the training environment.",
        ],
      },
    ],
    cta: "Call 93250 17557 to enquire or book a free trial class.",
  },
  {
    id: 2,
    category: "Parent's Guide",
    title: "How to Choose the Best Gymnastics Classes for Kids?",
    excerpt:
      "A practical guide to help parents compare coaching, safety, facilities and programs before choosing a gymnastics class.",
    readTime: "5 min read",
    image: choosingGymnasticsImage,
    content: [
      {
        heading: "Look for qualified and experienced coaches",
        paragraphs: [
          "A good gymnastics class starts with coaches who understand children's physical development and can teach skills progressively. Ask about their qualifications, experience and approach to beginner training.",
        ],
      },
      {
        heading: "Check the training environment",
        paragraphs: [
          "Look for suitable equipment, safety mats, clean training areas and enough space for children to practise. Supervision and clear safety instructions should be part of every session.",
        ],
      },
      {
        heading: "Choose an age-appropriate program",
        paragraphs: [
          "Toddlers, younger children and teenagers have different needs. Choose a program that matches your child's age, confidence and current ability rather than one that rushes children into advanced skills.",
        ],
      },
      {
        heading: "Observe a class or book a trial",
        paragraphs: [
          "A trial class can help you understand how coaches interact with children, how sessions are organised and whether your child feels comfortable in the environment.",
        ],
      },
    ],
    cta: "Visit SSD Sport Academy in Dhanori, Pune, and ask about a free trial class.",
  },
  {
    id: 3,
    category: "Gymnastics Benefits",
    title: "7 Benefits of Gymnastics for Growing Children",
    excerpt:
      "Explore how gymnastics can support strength, flexibility, balance, coordination and confidence in children.",
    readTime: "4 min read",
    image: gymnasticsBenefitsImage,
    content: [
      {
        heading: "More than just physical activity",
        paragraphs: [
          "Gymnastics gives children a fun and structured way to move, practise new skills and develop a range of physical abilities. With age-appropriate coaching, it can support well-rounded development.",
        ],
      },
      {
        heading: "Physical skills children can develop",
        paragraphs: [
          "Regular gymnastics practice can help children work on strength, flexibility, balance, coordination, body awareness, agility and posture. Skills are introduced gradually and adapted to the child's ability.",
        ],
      },
      {
        heading: "Confidence, focus and discipline",
        paragraphs: [
          "Learning a new movement takes patience and practice. Small achievements can help children become more confident, focused and comfortable with trying new challenges.",
        ],
      },
      {
        heading: "Enjoy learning at your own pace",
        paragraphs: [
          "Every child develops differently. A positive gymnastics environment encourages effort, safe practice and steady progress rather than comparing children with one another.",
        ],
      },
    ],
    cta: "Explore age-appropriate gymnastics programs at SSD Sport Academy.",
  },
  {
    id: 4,
    category: "For Parents",
    title: "What Is the Right Age to Start Gymnastics?",
    excerpt:
      "Understand how children can begin with basic movement activities and progress to structured gymnastics training.",
    readTime: "4 min read",
    image: rightAgeGymnasticsImage,
    content: [
      {
        heading: "There is no single perfect age",
        paragraphs: [
          "Children develop at different rates, so the right time to begin depends on their age, interest, readiness and the type of program available. Many academies offer introductory movement activities for younger children and structured classes for older age groups.",
        ],
      },
      {
        heading: "Start with the basics",
        paragraphs: [
          "For beginners, sessions may focus on simple movements, balance, coordination, flexibility and following instructions. More advanced skills should only be introduced when a child is ready and under appropriate supervision.",
        ],
      },
      {
        heading: "Look for a child-friendly approach",
        paragraphs: [
          "Choose a program that makes learning enjoyable, gives children time to practise and adapts activities to their abilities. Children should never be pressured to perform skills before they are ready.",
        ],
      },
      {
        heading: "Talk to the coach",
        paragraphs: [
          "A coach can help you understand which group is suitable for your child and what to expect from the sessions. A trial class is a useful way to see whether the environment is a good fit.",
        ],
      },
    ],
    cta: "Contact SSD Sport Academy to discuss a suitable program for your child.",
  },
];

function BlogModal({ article, onClose }) {
  useEffect(() => {
    if (!article) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="blog-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="blog-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-modal-title"
      >
        <div className="blog-modal-topbar">
          <span className="blog-modal-brand">
            <BookOpen size={17} />
            SSD Sport Academy
          </span>

          <button
            type="button"
            className="blog-modal-close"
            onClick={onClose}
            aria-label="Close article"
          >
            <X size={23} />
          </button>
        </div>

        <div className="blog-modal-scroll">
          <div className="blog-modal-heading">
            <span className="blog-category">{article.category}</span>
            <h2 id="blog-modal-title">{article.title}</h2>
            <div className="blog-read-time">
              <Clock3 size={15} />
              {article.readTime}
            </div>
          </div>

          <div className="blog-modal-image">
            <img
              src={article.image}
              alt={article.title}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="blog-article-content">
            {article.content.map((section, index) => (
              <section key={index}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="blog-article-cta">
              <p>{article.cta}</p>
              <a href="tel:9325017557">Call SSD Sport Academy</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-section-heading">
          <span className="blog-eyebrow">KNOW MORE • LEARN MORE</span>
          <h2>
            Gymnastics <span>Insights</span>
          </h2>
          <p>
            Helpful tips, expert guidance and useful information to help
            parents make confident choices for their children's gymnastics
            journey.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.id}>
              <div className="blog-card-image">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="blog-card-category">
                  {article.category}
                </span>
              </div>

              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <Clock3 size={14} />
                  {article.readTime}
                </div>

                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>

                <button
                  type="button"
                  className="blog-read-more"
                  onClick={() => setSelectedArticle(article)}
                >
                  Read Article <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-bottom-note">
          <span>Have questions about gymnastics classes?</span>
          <a href="tel:9325017557">Talk to our team</a>
        </div>
      </div>

      <BlogModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
