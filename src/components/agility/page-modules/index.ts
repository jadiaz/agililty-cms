import RichTextArea from "./RichTextArea";

const allModules = [
  { name: "RichTextArea", module: RichTextArea }
]

export const getModule = (moduleName: string): any | null => {
  if (!moduleName) return null;

  const obj = allModules.find( m => m.name.toLowerCase() === moduleName.toLowerCase() );

  if (!obj) return null;
  return obj.module;
}