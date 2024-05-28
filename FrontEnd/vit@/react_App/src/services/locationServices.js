/* const locationServices = async (inputValue) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const groupedLocations = [
                {
                    label: 'Online',
                    options: [
                        { id: 1, value: 'youtube', label: 'Youtube' },
                        { id: 2, value: 'url', label: 'URL' },
                    ],
                },
                {
                    label: 'Live',
                    options: [
                        { id: 3, value: 'barcelona', label: 'Barcelona' },
                        { id: 4, value: 'cambrils', label: 'Cambrils' },
                        { id: 5, value: 'paris', label: 'Paris' },
                        { id: 6, value: 'cornella', label: 'Cornella' },
                        { id: 7, value: 'japon', label: 'Japon' },
                    ],
                },
            ];

            const filteredLocations = groupedLocations.map(group => ({
                ...group,
                options: group.options.filter(option =>
                    option.label.toLowerCase().includes(inputValue.toLowerCase())
                ),
            }));

            resolve(filteredLocations);
        }, 1000);
    });
};

export default locationServices;
 */

const fetchLocations = async (inputValue) => {
    try {
        const response = await fetch('http://localhost:8080/locations');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const locations = await response.json();
        console.log('Locations: ', locations);

        if (!Array.isArray(locations)) {
            throw new Error("The response is not an array");
        }

        // Filtrar ubicaciones basadas en la entrada del usuario
        const filteredLocations = locations.map(group => ({
            ...group,
            options: Array.isArray(group.options) ? group.options.filter(option =>
                option.label.toLowerCase().includes(inputValue.toLowerCase())
            ) : []
        }));

        return filteredLocations;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw new Error("Failed to fetch locations");
    }
};

export default fetchLocations;

