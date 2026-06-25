import siteConfig from '@generated/docusaurus.config';

// Shadows the theme-classic component to load the languages listed in
// themeConfig.prism.additionalLanguages, then alias `console` to
// `shell-session`. Prism has no `console` language, but the docs use ```console
// widely, so the alias lets those blocks highlight without renaming any.
export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism;

  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach((lang) => {
    if (lang === 'php') {
      // eslint-disable-next-line global-require
      require('prismjs/components/prism-markup-templating.js');
    }
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });

  if (PrismObject.languages['shell-session']) {
    PrismObject.languages.console = PrismObject.languages['shell-session'];
  }

  // Prism's bash grammar colors only a fixed command allowlist (docker, git,
  // ...), so our CLIs render plain. Add them to the shared pattern in place so
  // `shell` and `shell-session` inherit the change too.
  const extraBashCommands = ['rdd', 'rdctl', 'kubectl', 'helm', 'nerdctl'];
  const bashCommand =
    PrismObject.languages.bash && PrismObject.languages.bash.function;
  if (bashCommand && bashCommand.pattern) {
    bashCommand.pattern = new RegExp(
      bashCommand.pattern.source.replace('(?:', `(?:${extraBashCommands.join('|')}|`),
      bashCommand.pattern.flags,
    );
  }

  // Clean up and eventually restore former globalThis.Prism object (if any)
  delete globalThis.Prism;
  if (typeof PrismBefore !== 'undefined') {
    globalThis.Prism = PrismObject;
  }
}
