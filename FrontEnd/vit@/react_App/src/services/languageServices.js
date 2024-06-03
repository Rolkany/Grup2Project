// languageService.js

const fetchAndSetLanguages = async (setLanguageOptions) => {
  try {
    const response = await fetch("http://localhost:8080/languages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const languages = await response.json();

    // Assuming languages has a structure like [{ label: 'Spanish', value: 'es' }, ...]
    setLanguageOptions(
      languages.map(lang => ({ label: lang.label, value: lang.value }))
    );

  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};

export { fetchAndSetLanguages };
