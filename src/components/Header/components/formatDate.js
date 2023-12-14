export const formatDate = (date) => {
    const options = {
        weeekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
};
