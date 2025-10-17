import { writeFile } from "fs/promises";

const wcagUrl = "https://www.w3.org/WAI/WCAG22/wcag.json";

const wcag22 = await fetch(wcagUrl).then((response) => {
      if (response.status >= 400)
        throw new Error(`HTTP error code received: ${response.status}`);
      return response.json();
    });

const data = wcag22;

await writeFile("_data/wcag-complete.json", JSON.stringify(data, null, "    ") + "\n");
