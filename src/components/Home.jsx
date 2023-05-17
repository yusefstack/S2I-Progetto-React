import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import HomeBanner from '../assets/img/Home-Banner.png'
import HomeBannerMobile from '../assets/img/Home-Banner-Mobile.png'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [suggestedRecipes, setSuggestedRecipes] = useState([])

  const fetchData = async () => {
  const results = await axios.get(`/.netlify/functions/mealsInfo?query=`)
  setSuggestedRecipes(results.data.results)
  setIsLoaded(true)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const suggestedRecipesToDisplay = suggestedRecipes.map((recipe) => {
  return (
    <div 
      key={uuidv4()} 
      className="card w-96 m-auto bg-base-100 mb-5 shadow-xl max-md:w-5/6"
    >
      <figure className="px-10 pt-10">
        <img src={recipe.image} alt="recipe" className="rounded-xl" />
      </figure>
      <div className="card-body rounded-b-2xl items-center text-center">
        <h2 className="card-title h-10 mb-3 max-md:text-sm">{recipe.title}</h2>
        <div className="card-actions">
          <Link 
            to={`recipes/${recipe.id}`} 
            className="btn btn-success"
          >
            Learn to make
          </Link>
        </div>
      </div>
    </div>
  )
})


if (isLoaded === false) {
  return (
    <div className='m-96 h-32'>
        <div className="bg-transparent absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="bg-transparent border-t-transparent border-solid animate-spin  rounded-full border-green-700 border-8 h-64 w-64"></div>
        </div>
    </div>
  )
  } else {
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
}

export default Home