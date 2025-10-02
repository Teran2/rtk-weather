export async function fetchWeather(city, apiKey) {
  // I just learned about encodeURIComponent, it's useful for properly formatting the url from user inputs and prevents the browser from misinterpreting.
  const q = encodeURIComponent(city);
  const url = `api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${apiKey}&units=imperial`;

  const res = await fetch(url); // await is used to pause the execution of the function until the promise is resolved.
  const body = await res.json().catch(() => ({})); // It parses the response as JSON, if not it will return an empty object as safeguard.

  // This checks the response status, if the status is not in the range of 200-299, it will handle the error.
  if (!res.ok) {
    // openweathermap api will include error messages in the JSON response if present.
    const message = body?.message || "Failed to fetch weather"; // If message isn't provided, it defaults.
    throw new Error(message);
  }

  return body;
}

// Overall this file keeps any fetch logic out of the components.