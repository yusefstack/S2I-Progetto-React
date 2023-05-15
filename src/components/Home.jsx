import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import HomeBanner from '../assets/img/Home-Banner.png'
import HomeBannerMobile from '../assets/img/Home-Banner-Mobile.png'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [suggestedRecipes, setSuggestedRecipes] = useState([])
  
  const fetchData = async () => {
  const results = await axios.get(`/.netlify/functions/mealsInfo?query=`)
  setSuggestedRecipes(results.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const suggestedRecipesToDisplay = suggestedRecipes.map((recipe) => {
  return (
    <div key={uuidv4()} className="card w-96 m-auto bg-base-100 mb-5 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={recipe.image} alt="recipe" className="rounded-xl" />
      </figure>
      <div className="card-body rounded-b-2xl items-center text-center">
        <h2 className="card-title h-10 mb-3">{recipe.title}</h2>
        <div className="card-actions">
          <Link to={`recipes/${recipe.id}`} className="btn btn-success">Learn to make</Link>
        </div>
      </div>
    </div>
  )
})


  return (
    <>
    <img src={HomeBanner} alt="home-banner" className='max-md:hidden' />
    <img src={HomeBannerMobile} alt="home-banner" className='md:hidden' />
      <div>
        <h1 className='font-bold ml-5 text-6xl text-black my-10 max-md:text-5xl'>Suggested Recipes</h1>
        <div className="w-5/6 m-auto grid grid-cols-3 gap-4 max-xl:block">
          {suggestedRecipesToDisplay}
        </div>
      </div>
    </>
  )
}

export default Home