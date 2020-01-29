import express from 'express'
import data from './data.json'

const app = express()

app.get('/', (req, res) => res.send('Hotels 🏨'))

app.get('/hotels', (req, res) => {
    res.json(data)
})

app.get('/city/:city', (req, res) => {
    const city = req.params.city
    //  ex http://localhost:3000/city/Berlin
    const wifi = req.query.wifi
    //  ex http://localhost:3000/city/Berlin/?wifi=true
    let hotelsFromCity = data.filter((hotel) => hotel.city == city)
  
    if (wifi) {
      // change hotelsFromCity to add a filter
      hotelsFromCity = hotelsFromCity.filter((hotel) => hotel.facilities.wifi)
    }
    res.json(hotelsFromCity)
  })

app.listen(3000, () => console.log('App listening to port 3000'))