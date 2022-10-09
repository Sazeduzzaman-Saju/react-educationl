export const CountryDataLoader = async () => {
    const CountryData = await fetch('https://restcountries.com/v2/all')
    const countries = await CountryData.json();
    return countries;
}