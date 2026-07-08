import React from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop';
import BlogSidebarMobile from '@theme/BlogSidebar/Mobile';

// Thread the post's table of contents through to the desktop sidebar so it can
// render below "Recent posts". Mobile keeps its existing behavior, with no TOC.
export default function BlogSidebar({sidebar, toc}) {
  const windowSize = useWindowSize();
  if (!sidebar?.items.length) {
    return null;
  }
  // Mobile sidebar doesn't need to be server-rendered
  if (windowSize === 'mobile') {
    return <BlogSidebarMobile sidebar={sidebar} />;
  }
  return <BlogSidebarDesktop sidebar={sidebar} toc={toc} />;
}
