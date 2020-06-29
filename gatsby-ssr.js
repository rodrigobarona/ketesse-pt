/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <React.Fragment>
        	<script src={safePrefix('onetrust/ketesse.js')}/>
        </React.Fragment>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('js/plugins.js')}/>
            <script src={safePrefix('js/init.js')}/>
            <script src={safePrefix('js/main.js')}/>
            
        </React.Fragment>
    ]);

};
