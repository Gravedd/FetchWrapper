//POST FETCH
async function fetchpost(url, senddata){
    let response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",//with cookies
        headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            // "X-CSRF-Token": token.value,     ---this for laravel
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(senddata)//send data
    });
    return await response.json();
}
//GET FETCH
async function fetchget(url){
    let response = await fetch(url);
    return await response.json();
}