export const SearchBar = ({ onSubmit }) => {
  async function lookForCity(formData) {
    const city = formData.get("searchLocationInput")
    console.log(city)
    if (!Boolean(city.trim())) return;
    onSubmit(formData.get("searchLocationInput"));
  }
  return (
      <form action={lookForCity}>
        <input name="searchLocationInput" placeholder="Search Location"></input>
        <button type="submit">Search</button>
      </form>
  );
};