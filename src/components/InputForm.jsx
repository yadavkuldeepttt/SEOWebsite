import React, { useState } from "react";
import "../App.css"; // Import your CSS file
// import InputForm2 from "./InputForm2";

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
    return data;
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
const InputForm = () => {
  const [url, setUrl] = useState("");
  const [seoData, setSeoData] = useState(null);

  // const [setanotherData, setAnotherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchSEOData(url);
      setSeoData(data);
      // const anotherData = await fetchDataFromAnotherAPI();
      // setAnotherData(anotherData);
      // console.log("Data from another API:", anotherData);
    } catch (error) {
      console.error("Error fetching SEO data:", error);
    }
  };

  const renderSEOInfo = () => {
    if (!seoData) return null;

    const {
      onpage_score,
      links_external,
      links_internal,
      duplicate_content,
      duplicate_title,

      checks: {
        no_description,
        no_image_title,
        meta_charset_consistency,
        low_content_rate,
      },
    } = seoData.tasks[0].result[0].page_metrics;
    const { domain } = seoData.tasks[0].data;
    return (
      <div className="seo-info">
        <h2>
          SEO results for <span>{domain}</span>
        </h2>
        <p>On-Page Score: {onpage_score}</p>
        <p>Total External Links: {links_external}</p>
        <p>Total Internal Links: {links_internal}</p>
        <p>Duplicate Content: {duplicate_content}</p>
        <p>Duplicate Pages: {duplicate_title}</p>
        <p>No Description: {no_description}</p>
        <p>No Image Title: {no_image_title}</p>
        <p>Meta Charset Consistency: {meta_charset_consistency}</p>
        <p>Content Rate: {low_content_rate}</p>
      </div>
    );
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Check SEO</button>
      </form>

      {renderSEOInfo()}
    </div>
  );
};

export default InputForm;
