import React from 'react'
import HomeComponent from '../components/HomeComponent'
import CountriesComponent from '../components/CountriesComponent'
import FooterComponent from '../components/FooterComponent'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <HomeComponent />
      <CountriesComponent />
      <FooterComponent />
      <Link to={"/error"}>click me</Link>

    </div>
  )
}

export default Home