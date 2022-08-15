
## v0.0.0
- 202208131140 : Init Astro project
- 202208131140 : `npm create astro@latest`
- 202208131140 : `npm run dev`
- 202208131155 : Install VSCode ext for Astro
- 202208131156 : `npm install --save-dev prettier prettier-plugin-astro`
- 202208131204 : Configure prettier [per recommendations](https://github.com/withastro/prettier-plugin-astro#using-in-vs-code)
- 202208131214 : Learn component strip for fenced-in expressive/sensitive JS/TS code
- 202208131220 : Learn component template for HTML output & dynamic data with JS expressions
- 202208141228 : `File '...Focus.astro' is not a module` is known issue with [scheduled fix](https://github.com/withastro/language-tools/pull/335)
- 202208141230 : Deploy Vercel, updated build settings
- 202208152115 : Integrate Header component
- 202208152120 : Integrate global style: CSS Reset
- 202208152132 : Integrate global style: System fonts
- 202208152140 : Integrate global style: Type scale
- 202208152211 : `npx astro add tailwind`
- 202208152222 : Restyle Focus components with utility styles
- 202208152233 : `tailwind.config.theme.container.centre: true`
- 202208152233 : `tailwind.config.theme.container.padding: 2rem`
- 202208152319 : `npm install -D @tailwindcss/line-clamp`
- 202208152333 : Setup [typographic defaults](https://www.themes.dev/blog/typographic-defaults-in-tailwind-css/)
- 202208152337 : `npm install @tailwindcss/typography@latest --save-dev`





```css
    <style>
      /* 
       *  CSS Reset
       *  Ref: https://www.joshwcomeau.com/css/custom-css-reset/
       */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      * {
        margin: 0;
      }
      html,
      body {
        height: 100%;
      }
      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }
      input,
      button,
      textarea,
      select {
        font: inherit;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        overflow-wrap: break-word;
      }
      #root,
      #__next {
        isolation: isolate;
      }

      /* 
       *  System font
       *  Ref: https://css-tricks.com/snippets/css/system-font-stack/
       */
      @font-face {
        font-family: system;
        font-style: normal;
        font-weight: 300;
        src: local(".SFNSText-Light"),
          local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"),
          local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"),
          local("DroidSans"), local("Tahoma");
      }
      body {
        font-family: "system";
      }

      /*
       *  Typography Scale
       *  Ref: https://type-scale.com/
       */
      html {
        font-size: 100%;
      } /* 16px */

      body {
        font-weight: 600;
        line-height: 1.75;
        color: #222222;
      }
      p {
        margin-bottom: 1rem;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 3rem 0 1.38rem;
        font-weight: 600;
        line-height: 1.3;
      }
      h1 {
        margin-top: 0;
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.44rem;
      }
      h5 {
        font-size: 1.2rem;
      }
      small,
      .text_small {
        font-size: 0.833rem;
      }
    </style>
```