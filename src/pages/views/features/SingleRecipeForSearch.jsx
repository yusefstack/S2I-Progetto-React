import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const SingleRecipeForSearch = () => {
    const { recipeId } = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const [mealData, setMealData] = useState({})
    const [extendedIngredients, setExtendedIngredients] = useState([])
    const [analyzedInstructions, setAnalyzedInstructions] = useState([])

const fetchData = async () => {
    const results = await axios.get(`/.netlify/functions/singleRecipe?recipeid=${recipeId}`)
    setMealData(results.data)
    setExtendedIngredients(results.data.extendedIngredients)
    setAnalyzedInstructions(results.data.analyzedInstructions[0].steps)
    setIsLoaded(true)
}

useEffect(() => {
    fetchData()
}, [])

const ingridientsToDisplay = extendedIngredients.map((ingridient) => {
    return (
        <li key={uuidv4()}><span className='mr-3 text-green-700'>➜</span>{ingridient.original}</li>
    )
})

const InstructionsToDisplay = analyzedInstructions.map((instruction) => {
    return (
        <li key={uuidv4()}>{instruction.step}</li>
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
            <Link 
                to="/researchedRecipes" 
                className='btn m-10'
            >
                Return Back
            </Link>
            <section className="relative bg-blueGray-50">
                <div className='w-1/2 font-bold m-auto flex justify-around my-20 max-md:block max-md:w-5/6'>
                    <div className='w-1/3 flex justify-evenly max-md:m-auto max-md:my-10 max-md:justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 14c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328zm-8.679 2.265v6h6c0-3.309-2.691-6-6-6z"/></svg>
                        {`${mealData.readyInMinutes} minutes`}
                    </div>
                    <div className='w-1/3 flex justify-evenly max-md:m-auto max-md:my-10 max-md:justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
                        {`${mealData.servings} persons`}
                    </div>
                    <div className='w-1/3 flex justify-evenly max-md:m-auto max-md:my-10 max-md:justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 15.01c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593zm-8.904-6.21c-.47-1.095-1.783-1.827-2.932-1.636-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.038-.257 1.517-1.252 1.069-2.295zm-1.448 1.363l.104.229-.218.045-.097-.219c-.225.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.153-.387-.176-.453-.244-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.169-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.172.385-.028.648-.361.774zm5.644-4.817l2.417 5.211c-4.279 2.284-9.871-.34-15 2.501l-2.313-5.065c3.873-2.694 9.197-.035 14.896-2.647zm.902-2.346c-6.179 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.455l-3.766-8.219z"/></svg>
                        {`$${mealData.pricePerServing} per serving`}
                    </div>
                </div>
                <h1 className='text-5xl font-bold mb-10 text-center'>{mealData.title}</h1>
                <img alt="..." src={mealData.image} className="w-2/4 m-auto align-middle shadow-xl rounded-2xl max-md:w-5/6"/>
                <div className="flex w-2/4 justify-between m-auto mt-10 max-md:block">
                    <div className="relative w-1/3 flex flex-col mt-4 max-md:w-full">
                        <div className="px-4 py-5 flex">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                <p className='bg-transparent text-3xl font-bold'>?</p>
                            </div>
                            <h6 className="text-xl ml-5 pt-2 mb-1 font-bold">What you need</h6>
                        </div>
                        <ul className="mb-4 text-blueGray-500">
                            {ingridientsToDisplay}
                        </ul>
                    </div>

                    <div className="relative w-2/4 flex flex-col mt-4 max-md:w-full">
                        <div className="px-4 py-5 bg-transparent flex w-4/6 m-auto max-md:w-full">
                            <div className="text-blueGray-500 p-3 text-center bg-transparent inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                <p className='bg-transparent text-3xl font-bold'>?</p>
                            </div>
                            <h6 className="text-xl ml-5 pt-2 mb-1 font-bold">How to do it</h6>
                        </div>
                        <ol className="mb-4 text-blueGray-500">
                            {InstructionsToDisplay}
                        </ol>
                    </div> 
                </div> 
            </section>
        </>
        )
    }
}
export default SingleRecipeForSearch