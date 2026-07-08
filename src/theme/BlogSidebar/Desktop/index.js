import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import styles from './styles.module.css';

const ListComponent = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};

// The table of contents and "Recent posts" share one sticky, scrollable column,
// with the TOC on top since it tracks the post being read. The TOC ships its
// own sticky positioning and a left border, both flattened in styles.module.css
// so the column reads as one list.
function BlogSidebarDesktop({sidebar, toc}) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <aside className="col col--3">
      <div className={clsx(styles.sidebar, 'thin-scrollbar')}>
        {toc && (
          <div className={styles.tocSection}>
            <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--sm')}>
              On this page
            </div>
            <div className={styles.toc}>{toc}</div>
          </div>
        )}
        <nav
          aria-label={translate({
            id: 'theme.blog.sidebar.navAriaLabel',
            message: 'Blog recent posts navigation',
            description: 'The ARIA label for recent posts in the blog sidebar',
          })}>
          <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
            {sidebar.title}
          </div>
          <BlogSidebarContent
            items={items}
            ListComponent={ListComponent}
            yearGroupHeadingClassName={styles.yearGroupHeading}
          />
        </nav>
      </div>
    </aside>
  );
}
export default memo(BlogSidebarDesktop);
