import { Config } from "./config.js" ;
import { CacheWrapper } from "./Cache/CacheWrapper.js" ;
import axios from "axios" ;
import  express from "express";
import cors from "cors" ;
import NewsAPI from "newsapi" ;

const newsapi = new NewsAPI(Config.getNewsAPIKey());
const app = express();

const fetchTopHeadlines = (country, category, sources, language) =>
    newsapi.v2.topHeadlines({
    sources,
    category,
    language,
    country
  })

app.use(cors());
app.get('/getNewsOnKeyword', async (req, res) => {
  const topic = req.query.topic;
  if (Config.isCacheEnabled()) {
    CacheWrapper.getClient().get(topic, async (err, status) => {
      console.log("In fetch News");
      if (err) throw err;
      console.log(status);
      if (status) {
        // return Promise(status);
        console.log("Cache hit");
        res.json(JSON.parse(status));
      } else {
        console.log("Cache miss");
        const url = `https://newsapi.org/v2/everything?pageSize=5&q=${encodeURIComponent(topic)}&apiKey=` + Config.getNewsAPIKey();
        var output = await axios(url);
        res.json(output.data);
        CacheWrapper.getClient().set(topic, JSON.stringify(output.data), () => {});
      }
    });
  } else {
    console.log("Redis cache disabled");
    newsapi.v2.everything({
      q: topic,
      language: 'en',
      page:5
    }).then(response => {
      res.json(response)
    });
  }
});

app.get('/getHeadlines', (req, res) => {
    const country = req.query.country || "gb";
    const category = req.query.category;
    const sources = req.query.sources;
    fetchTopHeadlines(country, category, sources)
      .then(response => {
        res.json(response);
      })
      .catch(error => console.log(error));
  });

app.set('port', Config.getPort());
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});