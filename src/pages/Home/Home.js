import React from 'react'
import Banner from '../../components/Banner/Banner';
import BannerCard from '../../components/BannerCard/BannerCard';
import NeedDoctor from '../../components/NeedDoctor/NeedDoctor';
import Service from '../../components/Service/Service';
import Specialist from '../../components/Specialist/Specialist';
import './Home.css'
// simple one home page components 
const Home = () => {
    return (
        <div>
          <Banner/>
          <Service/>
          <Specialist/>
          <NeedDoctor/>
          <BannerCard/>
        </div>
    )
}

export default Home
