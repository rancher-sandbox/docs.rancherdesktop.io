import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

// Blog posts use a full-width three-column grid whose outer edges line up with
// the navbar: the table of contents and recent posts on the left, the article
// in a center column that grows with the window, and a reserved right column for
// the footnote margin notes (built by src/clientModules/marginNotes.js). List
// and tag pages keep the default row/col layout.
export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const hasTOC = Boolean(toc);

  if (hasSidebar && hasTOC) {
    return (
      <Layout {...layoutProps}>
        <div className="container blog-post-wrap margin-vert--lg">
          <div className="blog-post-grid">
            <BlogSidebar sidebar={sidebar} toc={toc} />
            <main className="blog-post-main">{children}</main>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} toc={toc} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
}
