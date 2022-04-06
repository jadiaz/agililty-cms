const allTemplates: {name: string, template: JSX.Element}[] = [];

export const getPageTemplate = (templateName: string | null | undefined) => {
    if (!templateName) return null;

    const obj = allTemplates.find(t => t.name.toLowerCase() === templateName.toLowerCase());

    if (!obj) return null;
    return obj.template;
}