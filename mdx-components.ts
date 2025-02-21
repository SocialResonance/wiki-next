import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}