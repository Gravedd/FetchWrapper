# FetchWrapper
 simplified fetch function

![example](https://github.com/Gravedd/FetchWrapper/blob/main/assets/main.jpg)

### How to use
1. Download fetchwrapper.js and put it in your project folder
2. Connect it to html file 
   > &lt;script src="fetchwrapper.js">&lt;/script>
3. You can already use these features

#### Get-Fetch
Receives data from the server in json format
   > let response = await fetchget('your url'); 
#### Post-Fetch
Sends a json and returns a response from the server in json format
   > let response = await fetchpost('your url', your_object);

##### An example of the correct use of the function is in the "example.html" file
