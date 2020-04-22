const GOOGLE_NEWS_API_URL =
  "http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0cff18e5218d4dfabd664023b68482e8";

export const fetchNews = async () => {
  let news = [];
  try {
    let data = await fetch(GOOGLE_NEWS_API_URL, {
      method: "GET",
    });
    let jsonData = await data.json();
    news = filterData(jsonData.articles);
    return news;
  } catch (err) {
    console.log(err);
    return news;
  }
};

var filterData = (dataArr) => {
  let filtered = [];
  if (dataArr.length > 0) {
    for (let i = 0; i < 5; i++) {
      let index = Math.floor(Math.random() * 5); //repeats some index sometimes
      let obj = {
        title: dataArr[index].title,
        desc: dataArr[index].description,
        content: dataArr[index].content,
      };
      filtered.push(obj);
    }
  }
  return filtered;
};
