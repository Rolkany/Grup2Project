// locationServices.js

const fetchAndSetLocations = async (setLocationOptions) => {
    try {
        const response = await fetch("http://44.208.195.232:8080/Grupo2-V3/locations", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const location = await response.json();

        // Assuming location has a structure like [{ label: 'Spanish', value: 'es', id: '1' }, ...]
        setLocationOptions(
            location.map(lang => ({ label: lang.label, value: lang.value, id: lang.id }))
        );

    } catch (error) {
        console.error("Error fetching location:", error.message);
        if (error.name === "TypeError") {
            console.error("Network error or resource not found.");
        }
    }
};

export { fetchAndSetLocations };
