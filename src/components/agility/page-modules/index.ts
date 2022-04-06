const allModules: {name: string, module: JSX.Element}[] = [];

export const getModule = (moduleName: string) => {
  if (!moduleName) return null;

  const obj = allModules.find( m => m.name.toLowerCase() === moduleName.toLowerCase() );

  if (!obj) return null;
  return obj.module;
}