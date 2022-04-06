import { getAgilityPageProps } from "@agility/nextjs/node";
import { AgilityGetStaticPropsContext, AgilityPageProps } from "@agility/nextjs";
import Head from "next/head";
import { getPageTemplate } from "../components/agility/page-templates";

const HomePage = (props: AgilityPageProps) => {
  const { page, sitemapNode, notFound, pageTemplateName } = props;

  if (notFound === true) return null;

  return (
    <>
      <Head>
        <title>{sitemapNode?.title}</title>
        <meta name="generator" content="Agility CMS" />
        <meta name="agility_timestamp" content={new Date().toLocaleString()} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={page.seo.metaDescription} />
        <meta name="keywords" content={page.seo.metaKeywords} />
      </Head>
      <div>
        {getPageTemplate(pageTemplateName)}
      </div>
    </>
  );
}

export async function getStaticProps({params, locale, getModule, defaultLocale}: AgilityGetStaticPropsContext) {
  const globalComponents = {};
  const agilityProps = await getAgilityPageProps({params, locale, getModule, defaultLocale, globalComponents});

  if(!agilityProps) throw new Error(`agility page not found`);

  return { props: agilityProps, revalidate: 10 };
}

export default HomePage;