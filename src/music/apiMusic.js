export const list = (site) => {
    console.log(`${process.env.REACT_APP_API_URL}/${site}`);
    return fetch(`${process.env.REACT_APP_API_URL}/${site}`, {
        crossDomain:true,
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};