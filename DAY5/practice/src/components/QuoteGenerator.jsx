import React, { useEffect, useState } from "react";
import axios from "axios";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get(
          "https://api.api-ninjas.com/v1/quotes",
          {
            headers: {
              "X-Api-Key": "NI561PWKWs6Ny4iiyhsbwpBEXjE2QnVOGeJir8ZW",
            },
          }
        );

        setQuote(res.data[0].quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote(); // first call

    const interval = setInterval(fetchQuote, 1000); // every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteGenerator;