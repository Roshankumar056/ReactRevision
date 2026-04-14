import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/photos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => {
      controller.abort(); // cancel request on unmount
    };
  }, []);

  return <div>Contact</div>;
};

export default Contact;