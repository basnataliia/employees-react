const defaults = {
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache'
  }
}

const request = (method, url, options={}) => {
  return fetch(url, {
    method: method.toUpperCase(),
    body: JSON.stringify(options.data),
    headers: {
      ...defaults.headers,
      ...options.headers
    }
  }).then(response => {
    if(!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}

export default {
    request,
    get(url) {
      return request('GET', url)
    },
    put(url, options) {
      return request('PUT', url, options)
    },
    post(url, options) {
      return request('POST', url, options)
    },
    delete(url) {
      return requst('DELETE', url)
    }
}
