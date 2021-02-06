/**
 *
 * @param {string} path path passed to star route
 * @returns {string} star route html page
 */
function starRoute (path) {
  return `<html>
            <head>
              <meta name="viewport"
                    content="width=device-width, 
                    initial-scale=1.0">
            </head>
            <body>
              Star route hit - ${path}
            </body>
          </html>`;
}

export default starRoute;