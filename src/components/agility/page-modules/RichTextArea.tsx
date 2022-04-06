import React from "react";
import {renderHTML, Module} from "@agility/nextjs"

interface RichText {
	textblob: string
}

const RichTextArea: Module<RichText> = ({	module: { fields: {textblob}}}) => {

	return (
		<div className="relative px-8">
			<div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
				<div className="prose max-w-full mx-auto" dangerouslySetInnerHTML={renderHTML(textblob)} />
			</div>
		</div>
	)
}

export default RichTextArea;
