const requestURL = 'http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002'

function sendRequest(method, url, body = null) {
  return fetch(url).then(response => {
    return response.json()
  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))



