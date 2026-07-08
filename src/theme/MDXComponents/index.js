import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// Only customization: make Tabs/TabItem usable in any MDX file without an
// import. Everything else inherits the default map, so upstream fixes (footnote
// anchor registration, image decoding, ...) are never dropped by a stale copy.
export default {
  ...MDXComponents,
  Tabs,
  TabItem,
};
