const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': ''
	}
};
const btn = document.querySelector(".btn")
const summary = document.querySelector(".summary")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelector("#url").value 
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;


    summary.innerText ="Please wait article is summarizing...."

    if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)){
        summary.innerText ="Invalid URL!! Please provide a valid!!!"

    }else{

    fetch(url,options)
    .then(data => data.json())
    .then(data => {
        // console.log(data)xqa 
        summary.innerText = data?.summary
    })
    .catch(error =>{
        console.log(error)

    })}

})
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }