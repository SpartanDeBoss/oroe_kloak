import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreview.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Regular Sewer Maintenance',
    excerpt:
      'Regular sewer maintenance is crucial to prevent costly repairs and ensure your system is functioning properly...',
    link: '/blog/sewer-maintenance',
  },
  {
    id: 2,
    title: 'How to Choose the Right Septic Tank',
    excerpt:
      'Choosing the right septic tank is essential to ensure your system operates efficiently and effectively...',
    link: '/blog/septic-tank',
  },
  {
    id: 3,
    title: 'Signs Your Sewer Line Needs Repair',
    excerpt:
      'Knowing the signs that your sewer line needs repair can help you avoid costly damage and repairs...',
    link: '/blog/sewer-line-repair',
  },
  {
    id: 4,
    title: 'The Benefits of Professional Drain Cleaning',
    excerpt:
      'Professional drain cleaning offers a range of benefits, including improved efficiency and reduced risk of clogs...',
    link: '/blog/drain-cleaning',
  },
  {
    id: 5,
    title: 'Common Causes of Septic Tank Problems',
    excerpt:
      'Understanding the common causes of septic tank problems can help you prevent issues and keep your system running smoothly...',
    link: '/blog/septic-tank-problems',
  },
  {
    id: 6,
    title: 'How to Maintain Your Grease Trap',
    excerpt:
      'Proper maintenance of your grease trap is essential to prevent clogs, backups, and other issues...',
    link: '/blog/grease-trap-maintenance',
  },
];

export default function BlogPreview() {
  return (
    <section className="blog-preview">
      <h2 className="blog-title">Latest From Our Blog</h2>
      <div className="blog-preview-container">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={post.link} className="read-more">
              Read More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
