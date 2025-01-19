import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';

const blogPosts = [
  {
    id: 1,
    title: 'Hvordan du vedligeholder dit kloaksystem og hvorfor det er vigtigt',
    excerpt:
      'Regular sewer maintenance is crucial to prevent costly repairs and ensure your system is functioning properly...',
    link: '/blog/sewer-maintenance',
  },
  {
    id: 2,
    title: 'Sådan vælger du den rette septiktank',
    excerpt:
      'Choosing the right septic tank is essential to ensure your system operates efficiently and effectively...',
    link: '/blog/septic-tank',
  },
  {
    id: 3,
    title: 'Tegn på at et kloakrør har brug for reparation',
    excerpt:
      'Knowing the signs that your sewer line needs repair can help you avoid costly damage and repairs...',
    link: '/blog/sewer-line-repair',
  },
  {
    id: 4,
    title: 'Fordelene ved professionel afløbsrensning',
    excerpt:
      'Professional drain cleaning offers a range of benefits, including improved efficiency and reduced risk of clogs...',
    link: '/blog/drain-cleaning',
  },
  {
    id: 5,
    title: 'Almindelige årsager til problemer med din septiktank',
    excerpt:
      'Understanding the common causes of septic tank problems can help you prevent issues and keep your system running smoothly...',
    link: '/blog/septic-tank-problems',
  },
  {
    id: 6,
    title: 'Sådan vedligeholder du din fedtudskiller',
    excerpt:
      'Proper maintenance of your grease trap is essential to prevent clogs, backups, and other issues...',
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
