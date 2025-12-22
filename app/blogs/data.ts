export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Idea to Impact: The Real Value of Intellectway’s Educational Model",
    date: "30 Jun 2025",
    excerpt:
      "Education’s real value lives far beyond the classroom. See how Intellectway turns a single learning moment into a lifetime of leadership, adaptability, and impact.",
    content: [
      "A training session is just a few hours. A course might last a semester. But the impact of great education? That lasts a lifetime.",
      "At Intellectway, we don’t measure success by how many students pass through our doors. We measure it by how many emerge ready to lead, adapt, and grow in any context, anywhere in the world.",
      "We know that true educational impact isn’t about certificates on a wall. It’s about real-world change:",
      "• A student using critical thinking to tackle real challenges.",
      "• A professional applying new skills with confidence.",
      "• An institution transforming its programs through strategic support.",
      "Our mission is long-term. We're not just teaching; we're building intellectual infrastructure foundations that individuals and institutions can rely on for years to come.",
      "We operate with purpose. Every workshop, every mentorship, every partnership is a step toward creating a smarter, more resilient global community.",
      "Because when you invest in meaningful education, the returns are exponential—and at Intellectway, that’s exactly what we deliver.",
    ],
  },
  {
    id: "2",
    title: "Education That Works: How Intellectway Designs for Outcomes",
    date: "30 Jun 2025",
    excerpt:
      "A lot of companies talk about innovation. We build it. Discover how our human-centered design process keeps learning practical, measurable, and inspiring.",
    content: [
      "Innovation for us is not a buzzword. It is a design discipline grounded in research, prototyping, and measurement. Every learning journey begins with stakeholder interviews and labor-market intelligence that clarify the real problems to solve.",
      "We co-create curricula with industry mentors, simulate real-world challenges, and embed feedback loops into every milestone. When graduates walk into their next opportunity, they do so with actionable skills and the mindset to keep growing.",
    ],
  },
  {
    id: "3",
    title: "From Idea to Impact: The Real Value of Intellectway Learning",
    date: "30 Jun 2025",
    excerpt:
      "A training session lasts hours, but great education lasts a lifetime. Here's how we turn bright ideas into programs that keep delivering value.",
    content: [
      "We believe transformative education begins with a clear definition of impact. For some partners it is increased retention, for others it is community trust or innovation capacity. Those outcomes drive every decision from facilitator selection to post-program metrics.",
      "Our blended delivery model combines immersive workshops, digital practice, and mentorship. Alumni networks continue sharing resources and coaching long after the last session, ensuring that the impact compounds over time.",
    ],
  },
  {
    id: "4",
    title: "Why Accredited Partnerships Matter—and How We Build Them",
    date: "30 Jun 2025",
    excerpt:
      "Accreditation isn't just a badge. It's a promise of rigor, quality, and accountability. Learn why our partners trust us with their learners.",
    content: [
      "When learners invest time and resources into a program, they deserve recognition that travels with them. Accredited partnerships provide that assurance while holding us to the highest standards of quality and governance.",
      "We collaborate closely with accreditation bodies and institutional partners to align curriculum frameworks, assessment strategies, and student support operations. The result is a seamless pathway where credits, credentials, and career opportunities stay connected.",
    ],
  },
  {
    id: "5",
    title: "Supporting Students Beyond the Classroom: The Intellectway Way",
    date: "30 Jun 2025",
    excerpt:
      "Getting accepted is step one. Thriving is the goal. Our wraparound services help students stay confident, curious, and career-ready.",
    content: [
      "Students need more than lectures to thrive. They need mentors, wellness support, and real-time problem solving when life gets complicated. Our Student Success Coaches stay embedded with each cohort to anticipate needs and celebrate wins.",
      "Career readiness labs, language studios, and peer learning circles give every learner a safe space to practice, experiment, and grow. When graduation arrives, students leave with confidence and a community that keeps cheering them on.",
    ],
  },
  {
    id: "6",
    title: "Customized Training That Delivers: How Intellectway Designs Smarter",
    date: "30 Jun 2025",
    excerpt:
      "Generic programs fall flat. We co-create with employers to design learning that maps directly to today's roles—and tomorrow's opportunities.",
    content: [
      "Each organization has its own culture, tools, and customer expectations. That is why every Intellectway engagement begins with discovery workshops and performance data analysis. We build learning blueprints that mirror real workflows so teams apply new skills immediately.",
      "Our facilitators bring deep industry experience and remain accessible for coaching sprints after delivery. Leaders receive adoption dashboards and playbooks that sustain momentum across teams.",
    ],
  },
  {
    id: "7",
    title: "Global Readiness Starts Here: Empowering Students Everywhere",
    date: "30 Jun 2025",
    excerpt:
      "Being prepared now means thinking globally, adapting quickly, and staying curious. See how our programs help learners stay a step ahead.",
    content: [
      "Global readiness is as much about mindset as it is about credentials. We encourage learners to explore cross-cultural case studies, collaborate on international projects, and develop the adaptability demanded by modern employers.",
      "From visa planning to professional etiquette coaching, our advisors remove barriers so students can focus on learning. The result is a cohort of graduates ready to thrive in any geography or industry.",
    ],
  },
  {
    id: "8",
    title: "From Placement to Progress: How Intellectway Follows Through",
    date: "30 Jun 2025",
    excerpt:
      "Landing an offer is just the start. We track progress, coach teams, and partner with organizations to keep every learner moving forward.",
    content: [
      "We measure success long after the placement letter is signed. Structured check-ins with alumni and their managers ensure expectations are clear and support is available when challenges surface.",
      "By capturing performance insights and sharing them with training cohorts, we continuously refine our programs. The loop between classroom and workplace remains active, turning every placement into collective progress.",
    ],
  },
];

export const blogPostMap = blogPosts.reduce<Record<string, BlogPost>>(
  (acc, post) => {
    acc[post.id] = post;
    return acc;
  },
  {},
);

export const getBlogPostById = (id: string) => blogPostMap[id];

