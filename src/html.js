import React from 'react';
const HTML = (props) => {
    return(
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script src="./static/js/jquery/jquery.min.js"></script>
                <script src="./static/js/bootstrap/bootstrap.bundle.min.js"></script>
                <script src="./static/js/jquery-easing/jquery.easing.min.js"></script>
                <script src="./static/js/counter/jquery.waypoints.min.js"></script>
                <script src="./static/js/counter/jquery.counterup.min.js"></script>
                <script src="./static/js/custom.js"></script>
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                This app works best with JavaScript enabled.
                </noscript>
                <div
                key={`body`}
                id="___gatsby"
                dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

export default HTML;