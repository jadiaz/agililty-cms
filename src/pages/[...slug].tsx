import type {GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next"

import {getAgilityPageProps, getAgilityPaths} from "@agility/nextjs/node"
import {AgilityGetStaticPropsContext, AgilityPageProps} from "@agility/nextjs"

import Head from "next/head"
import {getPageTemplate} from "../components/agility/page-templates"
import {getModule} from "../components/agility/page-modules"

//this is only here to tell nextjs to properly treeshake fs-extra
import fs from "fs-extra"

const AgilityPage = (props: AgilityPageProps) => {
	const {page, sitemapNode, notFound, pageTemplateName} = props

	if (notFound === true) return null

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
			<div>{getPageTemplate(pageTemplateName)}</div>
		</>
	)
}

export async function getStaticProps({ preview, params, locale, defaultLocale, locales }: GetStaticPropsContext<{slug: string[]}>) {
	const globalComponents = {}

	//this is only here to tell nextjs to properly treeshake fs-extra
	fs.pathExistsSync(process.cwd())

	const agilityProps = await getAgilityPageProps({params, locale, getModule, defaultLocale, globalComponents, preview, locales})

	if (!agilityProps) throw new Error(`agility page not found`)

	return {props: agilityProps, revalidate: 10}
}

export async function getStaticPaths({locales, defaultLocale}: GetStaticPathsContext) {
	//get the paths configured in agility
	let agilityPaths = await getAgilityPaths({preview: false, locales, defaultLocale})

	return {
		paths: agilityPaths,
		fallback: "blocking",
	}
}

export default AgilityPage
