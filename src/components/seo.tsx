import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

export default function SEO({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
}: Props) {
  const { site } = useStaticQuery<QueryData>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}
