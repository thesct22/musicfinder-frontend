export const list = (music) => {
    return fetch(`${process.env.REACT_APP_API_URL}/${music}`, {
        crossDomain:true,
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};