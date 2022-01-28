async function fetchpost(url, senddata){
    let response = await fetch(url, {
        method: 'GET',
        credentials: "same-origin",//with cookies
        headers: {
            /*"Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",*/
            // "X-CSRF-Token": token.value,     ---this for laravel
            'Content-Type': 'application/json;charset=utf-8'
        },
            // body: JSON.stringify(senddata)//send data
    });
    let content = await response.json();
    console.log(content)
    return content;
}