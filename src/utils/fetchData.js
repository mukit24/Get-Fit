export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '19ae1f38b2msh465ec2676ebfbe9p1d3deejsneb7da9e1cce9',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}