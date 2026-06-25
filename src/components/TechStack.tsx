import React, { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const placeholder = "/images/placeholder.webp";

const mainCategories = [
  {
    title: "Languages",
    icon: "&lt;/&gt;",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Java", icon: "https://cdn.simpleicons.org/java/007396" },
    ],
  },
  {
    title: "Data Engineering",
    icon: "📁",
    items: [
      { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/kafka/231F20" },
      { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/017CEE" },
      { name: "Apache Spark", icon: "https://cdn.simpleicons.org/apachespark/E25A1C" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
    ],
  },
  {
    title: "Cloud & AWS",
    icon: "☁️",
    items: [
      { name: "Amazon S3", icon: "https://cdn.simpleicons.org/amazons3/569a31" },
      { name: "AWS Glue", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "AWS Lambda", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Amazon Athena", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Amazon Redshift", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Amazon QuickSight", icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    ],
  },
  {
    title: "Databases",
    icon: "💾",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/336791" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/FEF7DF" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    ],
  },
];

const learningCategory = {
  title: "CURRENTLY LEARNING",
  items: [
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
    { name: "dbt", icon: "https://cdn.simpleicons.org/dbt/FF694B" },
  ],
};

const TechStack: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = Array.from(root.querySelectorAll(".fade-in"));
            if (root.classList.contains("fade-in")) {
              fadeElements.unshift(root);
            }
            fadeElements.forEach((el) => el.classList.add("visible"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="techstack-section fade-in" id="techstack" ref={ref}>
      <div className="techstack-intro">
        <h2>MY TECH STACK</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="category-grid fade-in">
        {mainCategories.map((category) => (
          <div className="category-card" key={category.title}>
            <h3><span className="category-icon">{category.icon}</span> {category.title}</h3>
            <div className="tech-grid">
              {category.items.map((item) => (
                <div className="tech-card" key={item.name}>
                  <div className="tech-card-icon">
                    <img
                      src={item.icon}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => ((e.currentTarget as HTMLImageElement).src = placeholder)}
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="learning-card fade-in">
        <div className="learning-card-header">
          <span>CURRENTLY LEARNING</span>
        </div>
        <div className="learning-grid">
          {learningCategory.items.map((item) => (
            <div className="tech-card learning" key={item.name}>
              <div className="tech-card-icon">
                <img
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).src = placeholder)}
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="techstack-tagline">&lt;/&gt; Always <span className="tagline-cyan">learning</span>. Always <span className="tagline-purple">building</span>. Always <span className="tagline-cyan">improving</span>.</p>
    </section>
  );
};

export default TechStack;
