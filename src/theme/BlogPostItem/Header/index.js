import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import styles from './styles.module.css';

// Replace the stacked author block with a single meta row
// (date · reading time · author) on both the index and full posts. The title
// component still renders an h2 link on the index and a plain h1 on a post.
function InlineAuthors() {
  const {metadata} = useBlogPost();
  return (
    <>
      {metadata.authors.map((author, idx) => {
        const link =
          author.page?.permalink ||
          author.url ||
          (author.email && `mailto:${author.email}`);
        return (
          <React.Fragment key={idx}>
            {' · '}
            {link ? <Link to={link}>{author.name}</Link> : author.name}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function BlogPostItemHeader() {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <div className={styles.meta}>
        <BlogPostItemHeaderInfo className={styles.info} />
        <InlineAuthors />
      </div>
    </header>
  );
}
