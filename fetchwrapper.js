//GET FETCH
//receives data from the server in json format
//the function takes the url address
async function fetchget(url){
    let response = await fetch(url);
    return await response.json();
}
//POST FETCH
//sends a json and returns a response from the server in json format
//the function takes the url address, and the object to be sent to the server
async function fetchpost(url, senddata){
    let response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",//with cookies
        headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            // "X-CSRF-Token": token.value,//this for laravel
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(senddata)//send data
    });
    return await response.json();
}

    async function SendUserInfoo() {
        let user = {
            name: 'John',
            surname: 'Smith'
        };
        let response = await fetch('/article/fetch/post/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        let result = await response.json();
        console.log(result)
    }



    async function SendUserInfo() {
        let user = {
            name: 'John',
            surname: 'Smith'
        }
        let result = await fetchpost('example.com', user)
        console.log(result)
    }



SendUserInfo();