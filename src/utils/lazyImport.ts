import { ComponentType, lazy } from "react";

// Telling TypeScript what shape the imported module should have
type LazyImportResult = { default: ComponentType<unknown> };

// Scanning all Pages components files with `.page.tsx` extension suffix
// inside pages directory recursively.
const pages = import.meta.glob("../pages/**/*.page.tsx") as Record<
  string,
  () => Promise<LazyImportResult>
>;

/**
 * @description
 * This function will get a path to a file to import and will
 * return the lazy loaded component.
 * The lazy components will only be loaded when they are actually required.
 * To load a specific export use the `namedExport` parameter.
 *
 * @tutorial
 * Make sure when using this method that the path is relative to this file.
 * Make sure to wrap the component / code section with the
 * React's Suspense component in the docs.
 * @see {@link https://react.dev/reference/react/Suspense React Docs}.
 *
 * @param {string} relativePath - The path to the module that should be imported.
 * @param {string} [namedExport] - The name of the export that should be used.
 * @returns {React.LazyExoticComponent<any>} The lazy loaded component.
 */
export const lazyImport = (relativePath: string, namedExport?: string) => {
  return lazy(() => {
    const promise = import(relativePath);

    if (!namedExport) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export const lazyImportPage = (
  pageName: string,
  insideDedicatedFolder?: boolean,
) => {
  // Adding the prefix - the path to the pages folder there the pages are located.
  const relativePath = insideDedicatedFolder
    ? `../pages/${pageName}/${pageName}.page.tsx`
    : `../pages/${pageName}.page.tsx`;

  const loader = pages[relativePath];

  if (!loader) {
    throw new Error(`Page not found: ${pageName}`);
  }

  return lazy(loader);
};
