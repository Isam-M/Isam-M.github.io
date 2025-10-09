const start = `<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>technotes</title>
</head>
<body>
<h1>Tech notes fra team export</h1>
<p>Team Eksport deler erfaringer, kunnskap og ting som er gøy.</p>
`

const fs = require('node:fs');

const postFiles = fs.readdirSync("post")

const postContents = postFiles.map(f => fs.readFileSync("post/" + f, "utf8"))

const slutt = `
</body>
</html>`

fs.writeFileSync('index.html', start + postContents.join("\n") + slutt);