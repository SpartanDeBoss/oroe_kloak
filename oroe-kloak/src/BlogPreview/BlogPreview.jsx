import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';

const blogPosts = [
  {
    id: 1,
    title: 'Hvordan du vedligeholder dit kloaksystem og hvorfor det er vigtigt',
    excerpt:
      'Regelmæssig kloakvedligeholdelse er afgørende for at forhindre dyre reparationer og sikre, at dit system fungerer korrekt...',
    link: '/blog/sewer-maintenance',
  },
  {
    id: 2,
    title: 'Sådan vælger du den rette septiktank',
    excerpt:
      'Det er vigtigt at vælge den rigtige septiktank for at sikre, at dit system fungerer effektivt...',
    link: '/blog/septic-tank',
  },
  {
    id: 3,
    title: 'Tegn på at et kloakrør har brug for reparation',
    excerpt:
      'At kende tegnene på, at din kloakledning skal repareres, kan hjælpe dig med at undgå dyre skader og reparationer...',
    link: '/blog/sewer-line-repair',
  },
  {
    id: 4,
    title: 'Fordelene ved professionel afløbsrensning',
    excerpt:
      'Professionel afløbsrensning giver en række fordele, herunder forbedret effektivitet og reduceret risiko for tilstopning...',
    link: '/blog/drain-cleaning',
  },
  {
    id: 5,
    title: 'Almindelige årsager til problemer med din septiktank',
    excerpt:
      'At forstå de almindelige årsager til septiktankproblemer kan hjælpe dig med at forhindre problemer og holde dit system kørende...',
    link: '/blog/septic-tank-problems',
  },
  {
    id: 6,
    title: 'Sådan vedligeholder du din fedtudskiller',
    excerpt:
      'Korrekt vedligeholdelse af fedtudskillere er afgørende for at forhindre tilstopninger, backups og andre problemer...',
    link: '/blog/grease-trap-maintenance',
  },
];

export default function BlogPreview() {
  return (
    <section className="blog-preview">
      <h2 className="blog-title">Seneste fra vores blog</h2>
      <div className="blog-preview-container">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={post.link} className="read-more">
              Læs mere
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
