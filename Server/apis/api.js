// const fetch = require("node-fetch");

const API_USERNAME = "yadavkuldeep9304@gmail.com";
const API_PASSWORD = "23aacd090f1c0ff3";
const BASE_URL = "https://sandbox.dataforseo.com/v3/on_page/";

const fetchSEOData = async (domain) => {
  const endpoint = "summary";

  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`,
      },
      body: JSON.stringify({
        data: {
          domain,
          language: "en",
        },
      }),
    });

    const data = await response.json();
    console.log("Pages Data:", data);
  } catch (error) {
    console.error("Error fetching pages data:", error);
  }
};

// const fetchDataFromAnotherAPI = async () => {
//   const anotherEndpoint = "links";

//   try {
//     const response = await fetch(
//       "https://sandbox.dataforseo.com/v3/on_page/" + anotherEndpoint,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // Add any additional headers if needed
//           Authorization: `Basic ${btoa(`${API_USERNAME}:${API_PASSWORD}`)}`,
//         },
//       }
//     );

//     const data = await response.json();
//     console.log("Another API Data:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data from another API:", error);
//     throw error;
//   }
// };

// module.exports = {
//   fetchSEOData,
//   fetchDataFromAnotherAPI,
// };
module.exports = fetchSEOData;
