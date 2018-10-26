---
path: '/articles/codea-test-02'
date: '2018-11-17'
title: 'Codea test'
tags: ['VueJS']
author: woostbot
---

At some point, you will want to get back all the individual values in the array for printing them on the screen, manipulating them, or for performing some action on them. If I ask you how would you do that? You’ll say — it’s easy. I’ll just loop over them using for, while, for-of or one of these looping methods.Example implementations would be —

```js{numberLines: true}
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames'

import withRoot from 'utils/withRoot'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import Footer from 'components/Footer'

import styles from './layout.module.scss'
import './root.scss'

const sizes = {
  DEFAULT: 'default',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
}

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.objectOf(PropTypes.string),
    sizePadding: PropTypes.oneOf([
      sizes.DEFAULT,
      sizes.SMALL,
      sizes.MEDIUM,
      sizes.LARGE,
    ]),
  }

  render() {
    const { children, title, meta, sizePadding } = this.props

    const classMain = classNames({
      [styles.mainDefault]: sizePadding === sizes.DEFAULT,
      [styles.mainSmall]: sizePadding === sizes.SMALL,
      [styles.mainMedium]: sizePadding === sizes.MEDIUM,
      [styles.mainLarge]: sizePadding === sizes.LARGE,
    })

    return (
      <>
        <Helmet
          title={title && title}
          meta={[
            { name: 'description', content: meta.description },
            { name: 'keywords', content: meta.keywords },
          ]}
        />
        <NavBar />
        <main className={classMain}>{children}</main>
        <Footer />
        <SideBar />
      </>
    )
  }
}

Layout.defaultProps = {
  meta: {
    description: 'codea blog',
    keywords: 'Programación, codea',
  },
  sizePadding: 'default',
}

export default withRoot(Layout)
```

## todo super

```js{1-3,12}{numberLines: true}
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
​
​
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    fallbackLng: 'en',
    debug: true,
​
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
​
    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });
​
​
export default i18n;
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
​
import App from './App'; // your entry page
import i18n from './i18n'; // initialized i18next instance
​
ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <App />
  </I18nextProvider>,
  document.getElementById('app')
);
```

```js
import React from 'react';
import { translate } from 'react-i18next';
​
function TranslatableView(props) {
  const { t, tReady } = props;
  // tReady is true if translations were loaded.
  // Use wait option to not render before loaded
  // or render placeholder yourself if not tReady=false
​
  return (
    <div>
      <h1>{t('keyFromDefault')}</h1>
      <p>{t('anotherNamespace:key.from.another.namespace', { /* options t options */ })}</p>
    </div>
  )
}
​
export default translate(['defaultNamespace', 'anotherNamespace'])(TranslatableView);
​
// short for only loading one namespace:
export default translate('defaultNamespace')(TranslatableView);
​
// short for using defaultNS of i18next
export default translate()(TranslatableView);
​
// using a function to return namespaces based on props
export default translate((props) => props.namespaces)(TranslatableView);
```
