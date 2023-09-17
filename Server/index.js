// server.js
const http = require("http");
const fetchSEOData = require("./apis/api.js");
// const fetchDataFromAnotherAPI = require("./apis/api.js");

const server = http.createServer(async (req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { url } = JSON.parse(body);

        if (url) {
          const seoData = await fetchSEOData(url);
          // const anotherData = await fetchDataFromAnotherAPI();
          res.writeHead(200, { "Content-Type": "application/json" });
          // res.end(JSON.stringify(seoData, anotherData));
          res.end(JSON.stringify(seoData));
        } else {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("URL not provided.");
        }
      } catch (error) {
        console.error("Error fetching SEO data:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error fetching SEO data.");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
