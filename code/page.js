import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Page = ({
  title,
	description,
  stylesheet,
  header,
  main,
  footer,
  script,
  _relativeURL,
  _ID
}) => (
  <html lang="en-us">
    <head>
      <title>Foxes n Friends - {title}</title>
			<meta name="description" content={description || "Breaking News Updates | Latest News Headlines | Photos & News Videos"} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        rel="stylesheet"
        href={_relativeURL(`/assets/css/reset.css`, _ID)}
      />
      <link rel="stylesheet" href={_relativeURL(`/assets/css/site.css`, _ID)} />
      {stylesheet != undefined ? (
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
        />
      ) : null}
    </head>
    <body>
      <div className="top">
        <header role="banner">
					<input class="hamburger-input" id="hamburger" type="checkbox" />
					<label class="hamburger" role="button" htmlFor="hamburger" aria-label="Menu">
						<svg height="32px" width="32px">
							<path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
						</svg>
					</label>
					<label htmlFor="hamburger" class="header-overlay" />
					
          {header}
        </header>

        <main>{main}</main>
      </div>

      <footer>{footer}</footer>

      {script != undefined ? (
        <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
      ) : null}
    </body>
  </html>
);

Page.propTypes = {
	_ID: PropTypes.string.isRequired,
	_relativeURL: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	header: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
	description: PropTypes.string,
	stylesheet: PropTypes.string,
	script: PropTypes.string,
};

Page.defaultProps = {
	description: null,
	stylesheet: null,
	script: null
};

export default Page;
