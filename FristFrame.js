// Import necessary modules
const express = require("express");

// Create an instance of Express
const app = express();

// Define a route to handle incoming requests
app.get("/", (req, res) => {
  // Construct the HTML response with meta tags
 res.send('
        <!DOCTYPE html>
        <HTML>
        <head>
            <meta property="og:image" content="https://fc-dev-call.replit.app/image">
            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image">
            <meta property="fc:frame:button:1" content="Spec">
            <meta property="fc:frame:button:1:action" content="link">
            <meta property="fc:frame:button:1:target" content="https://warpcast.notion.site/NFT-extended-Open-Graph-Spec-4e350bd8e4c34e3b86e77d58bf1f5575">
            <meta property="fc:frame:button:2" content="Image">
            <meta property="fc:frame:button:2:action" content="link">
            <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image">
            <meta property="fc:frame:button:3" content="Frame Validator">
            <meta property="fc:frame:button:3:action" content="link">
            <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames">
            <meta property="fc:frame:button:4" content="Replit">
            <meta property="fc:frame:button:4:action" content="link">
            <meta property="fc:frame:button:4:target" content="https://replit.com/@ujvalkumar/UjvalFrame1#index.js">
        </head>
        <body>
            <h1>Welcome to Your Website</h1>
            <p>This is a simple Node.js app serving HTML meta tags.</p>
        </body>
        </html>
   ');
    `;
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
