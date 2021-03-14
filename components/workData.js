import styles from "../theme";

import Link from 'next/link'

const workData = [
    {
      title: 'Scope',
      description: 'Software Engineering metrics in a single dashboard.',
      route: '/work'
    },
    {
      title: 'CV Advisors',
      description: 'CV Advisors is a global multi-family office headquartered in Miami, Florida.',
      route: '/work'
    },
    {
      title: 'Paint Uber',
      description: 'Una nueva forma de pintar nuestro hogar, una nueva forma de cuidar nuestro futuro',
      route: '/work'
    },
    {
      title: 'Cargo Lift',
      description: 'Software Engineering metrics in a single dashboard.',
      route: '/work'
    },
    
]

export default workData;

const Work = () => {
  return (
    <div>
      <h1 style={styles.title}>Work</h1>
      <div className="projects-section">
      <Link href="/blog" className="card">
          <a>Home</a>
        </Link>

        <a href="https://nextjs.org/learn" className="card">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
        <style jsx>{`
          .projects-section {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: 3rem;
          }

          .card {
            height: 220px;
            background: #0093fa;
            margin: 1.5rem;
            flex-basis: 45%;
            padding: 2rem;
            text-align: left;
            color: white;
            text-decoration: none;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #fff;
            border-color: #0070f3;
            transition: #fff 0.15s ease, border-color 0.15s ease;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}</style>
      </div>
    </div>
  );
};

