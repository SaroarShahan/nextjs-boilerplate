import styles from './page.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack developer with 8+ years of experience in React and Node.js. Passionate about creating efficient and scalable web applications.',
    avatar: '👩‍💻',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on user-centered design principles. Specializes in modern, accessible interfaces that users love.',
    avatar: '👨‍🎨',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
  },
  {
    id: 3,
    name: 'Alex Rodriguez',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist ensuring smooth deployments and optimal performance. Expert in cloud technologies and CI/CD pipelines.',
    avatar: '👨‍💼',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and methodologies to deliver exceptional solutions.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve great results.'
  },
  {
    icon: '🎯',
    title: 'Quality',
    description: 'We are committed to delivering high-quality code and user experiences that exceed expectations.'
  },
  {
    icon: '📚',
    title: 'Learning',
    description: 'We foster a culture of continuous learning and professional growth for our team.'
  }
];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Next Boilerplate</h1>
          <p className={styles.subtitle}>
            Building the future of web development with modern tools and best practices.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.missionDescription}>
              We are dedicated to creating exceptional web experiences that combine beautiful design 
              with powerful functionality. Our team specializes in modern React applications, focusing 
              on performance, accessibility, and user experience.
            </p>
            <p className={styles.missionDescription}>
              Through this Next.js boilerplate, we aim to provide developers with a solid foundation 
              for building scalable, maintainable, and modern web applications. We believe in the power 
              of open-source collaboration and continuous improvement.
            </p>
          </div>
          <div className={styles.missionImage}>
            <div className={styles.imageContent}>
              <span className={styles.missionIcon}>🎯</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.teamAvatar}>{member.avatar}</div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamBio}>{member.bio}</p>
              <div className={styles.teamSkills}>
                {member.skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles.technology}>
        <div className={styles.techContent}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <p className={styles.techDescription}>
            We use modern, battle-tested technologies to build robust and scalable applications.
          </p>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Frontend</h3>
              <div className={styles.techItems}>
                <span className={styles.techItem}>⚛️ React</span>
                <span className={styles.techItem}>🔷 TypeScript</span>
                <span className={styles.techItem}>⚡ Next.js</span>
                <span className={styles.techItem}>🎨 CSS Modules</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Development</h3>
              <div className={styles.techItems}>
                <span className={styles.techItem}>📦 npm/yarn</span>
                <span className={styles.techItem}>🔧 ESLint</span>
                <span className={styles.techItem}>💅 Prettier</span>
                <span className={styles.techItem}>🌿 Git</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Deployment</h3>
              <div className={styles.techItems}>
                <span className={styles.techItem}>▲ Vercel</span>
                <span className={styles.techItem}>☁️ AWS</span>
                <span className={styles.techItem}>🐳 Docker</span>
                <span className={styles.techItem}>🔄 CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Work Together?</h2>
          <p className={styles.ctaDescription}>
            Let&apos;s build something amazing together. Get in touch to discuss your next project.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.primaryButton}>Get In Touch</a>
            <a href="/products" className={styles.secondaryButton}>View Our Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}