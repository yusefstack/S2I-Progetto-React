import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const SingleRecipe = () => {
    const { recipeId } = useParams()
    const [mealImage, setMealImage] = useState('')
    const [mealTitle, setMealTitle] = useState('')
    const [extendedIngredients, setExtendedIngredients] = useState([])
    const [analyzedInstructions, setAnalyzedInstructions] = useState([])

const fetchData = async () => {
    const results = await axios.get(`/.netlify/functions/singleRecipe?recipeid=${recipeId}`)
    setMealImage(results.data.image)
    setMealTitle(results.data.title)
    setExtendedIngredients(results.data.extendedIngredients)
    setAnalyzedInstructions(results.data.analyzedInstructions[0].steps)
}

useEffect(() => {
    fetchData()
  }, [recipeId])

const ingridientsToDisplay = extendedIngredients.map((ingridient) => {
    return (
        <li key={uuidv4()}>{ingridient.original}</li>
    )
})

const InstructionsToDisplay = analyzedInstructions.map((instruction) => {
    return (
        <li key={uuidv4()}>{instruction.step}</li>
    )
})
  return (
    <>
        <Link to="/" className='btn m-10'>Return Back</Link>
        <section class="relative pt-16 bg-blueGray-50">
            <h1 className='text-5xl font-bold mb-10 text-center'>{mealTitle}</h1>
            <img alt="..." src={mealImage} class="w-2/4 m-auto align-middle shadow-xl rounded-2xl max-md:w-5/6"/>
            <div class="flex w-2/4 m-auto max-md:block">
                <div class="relative w-2/4 flex flex-col mt-4 max-md:w-full">
                    <div class="px-4 py-5 flex">
                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <p className='bg-transparent text-3xl font-bold'>?</p>
                        </div>
                        <h6 class="text-xl ml-5 pt-2 mb-1 font-bold">What you need</h6>
                    </div>
                    <ul class="mb-4 text-blueGray-500">
                        {ingridientsToDisplay}
                    </ul>
                </div>

                <div class="relative w-2/4 flex flex-col mt-4 max-md:w-full">
                    <div class="px-4 py-5 bg-transparent flex">
                        <div class="text-blueGray-500 p-3 text-center bg-transparent inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <p className='bg-transparent text-3xl font-bold'>?</p>
                        </div>
                        <h6 class="text-xl ml-5 pt-2 mb-1 font-bold">How to do it</h6>
                    </div>
                    <ol class="mb-4 text-blueGray-500">
                        {InstructionsToDisplay}
                    </ol>
                </div> 
            </div> 
        </section>
    </>
  )
}

export default SingleRecipe