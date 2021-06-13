import React from 'react';
import './resources/style/App.css';
async function searchNews(q, category) {
  console.log(q);
  q = encodeURIComponent(q);
  let url;
  if (q) {
    url = 'http://localhost:5000/getNewsOnKeyword?topic=' + q;
  } else {
    url = 'http://localhost:5000/getHeadlines' + (category ? '?category=' + category :  ''); 
  }
  const requestInfo = new Request(url, {
    method: "GET",
    headers: {
        Accept: "application/json",
    }
  });
  console.log(requestInfo);
  const response = await fetch(requestInfo);
  const body = await response.json();
  console.log(body);
  return body;
}
const categories = [
                    {
                      displayName:"Business",
                      value:"business"
                    },
                    {
                      displayName:"Entertainment",
                      value:"entertainment"
                    },
                    {
                      displayName:"Sports",
                      value:"sports"
                    },
                    {
                      displayName:"Health",
                      value:"health"
                    },
                    {
                      displayName:"Science",
                      value:"science"
                    },
                    {
                      displayName:"General",
                      value:"general"
                    },
                  ];
function App() {
  const [query, setQuery] = React.useState("");
  const [list, setList] = React.useState(null);
  
  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };
  const submitCategory = (e,category) => {
    e.preventDefault();
    searchNews(query,category).then(setList);
  }
  return (
    <div className="app">
      <div className="newsHeading">UK News</div>
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div className="categoryItemHeading">
        Categories:
        {            
          categories.map(x => (
          <div key={x.value} className="categoryItem" onClick={e => submitCategory(e,x.value)}>{x.displayName}</div>
          ))
        }
      </div>
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : 
          <div>
            { list.articles.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
      }
    </div>
  );
}
function Item({ item }) {
  const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  return (
    <div className="item">
      {item.urlToImage &&
        <img className="thumbnail"
          alt=""
          src={item.urlToImage}
          height = "250"
          width = "250"
        />
      }
      <h2 className="title">
        <a href={item.url}>{item.title}</a>
      </h2>
      <p className="description">
        {item.description}
      </p>
      <p className="content">
        {item.content}
      </p>
      <div className="meta">
        <span>{formatDate(item.publishedAt)}</span>
        {/* <span className="provider">
          {item.provider[0].image?.thumbnail &&
            <img className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
          }
          {item.provider[0].name}
        </span> */}
        {item.source &&
          <span>{separateWords(item.source.name)}</span>
        }
      </div>
    </div>
  );
}
export default App;