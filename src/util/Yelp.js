const apiKey='Hy5ANM2-QVgiVP7z52rDt7YuRP_l0jL83ZRG4GEPsva7-IG9XMSuMICtjCOoHqMqgt0kLhH8SArQBrbQPQSj_Nz7aUdZeyNs8QYpGZmwcyugQT0uWWE2fq6QuH7eXHYx'

export const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then( (response) => response.json() )
      .then( (jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map( (business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
}
