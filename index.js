let giphyData = []

const getGiphy = async() => {
  const response = await fetch('https://api.giphy.com/v1/gifs/search?q=breaking+bad&api_key=u8klP37MGW6rYjVcYWCCkx8IwPdttYTK&limit=9')
  const data = await response.json();
  giphyData = data.data;
  await viewData(giphyData);
}

const viewData = () => {
  let gif = "";
  giphyData.map(element => {
    gif += `
        <div class="column">
            <img src="${element.images.preview_gif.url}" width=100% height=100%>
        </div>`;        
  })
  let giphy = document.getElementById("viewData").innerHTML = gif;
}

getGiphy();