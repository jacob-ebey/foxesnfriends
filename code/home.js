import PropTypes from "prop-types";
import React from "react";

import WorkPreview from "./components/work-preview";

const Home = ({ _body, _pages, featuredWork, secondaryWorks, newWorks }) => {
  const featured = _pages[`works/${featuredWork}`];

  const [featuredA, featuredB] = React.useMemo(() => {
    if (!newWorks) return [null, null];

    const half = Math.ceil(newWorks.length / 2);
    return [
      newWorks.slice(0, half),
      newWorks.slice(half, newWorks.length)
    ];
  }, [newWorks]);

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero__content">
          {_body}
        </div>
      </div>

      <div className="home__content">
        <main id="explore">
          <WorkPreview
            large
            marginBottom
            title={featured.title}
            href={featured._url}
            image={featured.previewImage}
          >
            {secondaryWorks && secondaryWorks.length > 0 && (
              <div className="home__secondary-works">
                {secondaryWorks.map(secondaryWork => (
                  <WorkPreview
                    border={false}
                    title={featured.title}
                    href={featured._url}
                  />
                ))}
              </div>
            )}
          </WorkPreview>
        </main>
        {featuredA && featuredA.length > 0 && (
          <aside className="home__featured-a">
            {featuredA.map((featuredWork, index) => {
              const featured = _pages[`works/${featuredWork}`];
              return (
                <WorkPreview
                  marginBottom={index < featuredA.length - 1}
                  title={featured.title}
                  href={featured._url}
                  image={featured.previewImage}
                />
              );
            })}
          </aside>
        )}

        {featuredB && featuredB.length > 0 && (
          <aside className="home__featured-b">
            {featuredB.map((featuredWork, index) => {
              const featured = _pages[`works/${featuredWork}`];
              return (
                <WorkPreview
                  marginBottom={index < featuredB.length - 1}
                  title={featured.title}
                  href={featured._url}
                  image={featured.previewImage}
                />
              );
            })}
          </aside>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  _body: PropTypes.node.isRequired,
  featuredWork: PropTypes.string.isRequired
};

Home.defaultProps = {};

export default Home;
