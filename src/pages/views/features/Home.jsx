import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import HomeBanner from '../../../assets/img/Home-Banner.png';
import HomeBannerMobile from '../../../assets/img/Home-Banner-Mobile.png';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SEO from '../../../components/SEO';

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
      className="card w-96 m-auto transition duration-500 hover:scale-125 hover:z-20 transform bg-gray-100 mb-5 shadow-xl max-md:w-5/6 max-md:mt-20"
    >
      <figure className="bg-gray-100 px-10 pt-10">
        <img src={recipe.image} alt="recipe" className="rounded-xl bg-gray-100" />
      </figure>
      <div className="card-body bg-gray-100 rounded-b-2xl items-center text-center">
        <h2 className="card-title bg-gray-100 h-10 mb-3 max-md:text-sm">{recipe.title}</h2>
        <div className="card-actions bg-gray-100">
          <Link 
            className="btn btn-success relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full shadow-md group"
            to={`recipes/${recipe.id}`}
          >
            <span className="btn-success absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-6 h-6 bg-transparent text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="btn-success font-bold absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Learn to make</span>
            <span className="relative invisible">Button Text</span>
          </Link>
        </div>
      </div>
    </div>
  )
})


if (isLoaded === false) {
  return (
    <div className='w-2/4 m-auto text-center my-96'>
      <span className="w-64 loading loading-spinner text-secondary max-md:w-32"></span>
    </div>
  )
  } else {
      return (
      <>
        <SEO
          title="VEG"
          description="We provide you the best vegetarian recipes from all over the world."
          name="VEG"
          type="recipes webapp"
        />
        <img src={HomeBanner} alt="home-banner" className='sticky top-0 max-md:hidden' />
        <img src={HomeBannerMobile} alt="home-banner" className='sticky top-0 md:hidden' />
        <div className='bg-gray-300 pt-10 z-10 relative rounded-t-3xl'>
          <h1 className='bg-gray-300 font-bold ml-5 text-6xl text-black my-10 max-md:text-5xl'>Suggested Recipes</h1>
          <div className="w-5/6 bg-gray-300 relative z-10 m-auto grid grid-cols-3 gap-20 max-xl:block">
            {suggestedRecipesToDisplay}
          </div>
          <div className='h-20 bg-gray-300'></div>
        </div>
      </>
    )
  }
}

export default Home