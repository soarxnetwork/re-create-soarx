export const formatDate = (dateString: Date) => {
  return new Date(dateString).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
