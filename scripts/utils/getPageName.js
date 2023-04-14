// Function to get page name
function getPageName() {
  const pathname = window.location.pathname; // get page pathname
  const pathnameArray = pathname.split('/'); // split pathname to array
  const pageName = pathnameArray[pathnameArray.length - 1].replace('.html', ''); // get page name by taking last element of array and replace '.html' from the end to take a name
  return pageName;
}

export default getPageName;