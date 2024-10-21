const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
    if (onPerfEntry && performance && performance.getEntriesByType) {
        performance.getEntriesByType('measure').forEach((entry) => {
            onPerfEntry(entry);
        });
    }
};

export default reportWebVitals;
