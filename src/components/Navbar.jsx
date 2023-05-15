import React from 'react'
import logo from '../assets/img/VEG logo.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addResearchRecipes } from '../features/storeSlices/recipesSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [searchWord, setSearchWord] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchData = async () => {
    const results = await axios.get(`/.netlify/functions/mealsInfo?query=${searchWord}`)
    dispatch(addResearchRecipes(results.data.results))
    navigate("/researchedRecipes")
  }
    
  function handleChange(e) {
    setSearchWord(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchData()
  }

    return (
        <div className="navbar bg-primary-focus">
        <Link to="/" className="flex-1 bg-transparent">
          <img className='w-16 h-16 bg-transparent' src={logo} alt="nav-logo" />
        </Link>
        <div className=" w-5/6 justify-between flex-none gap-2 bg-transparent">
          <form onSubmit={handleSubmit} className="form-control w-3/4 bg-transparent">
            <input type="text" placeholder="Search a new recipe" onChange={handleChange} value={searchWord} className="w-full input input-bordered bg-primary" />
          </form>
          <div className="dropdown dropdown-end bg-transparent">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full bg-transparent">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt='profile-photo'/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li className='bg-transparent'>
                <a className="justify-between bg-transparent">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className='bg-transparent'><a className='bg-transparent'>Settings</a></li>
              <li className='bg-transparent'><a className='bg-transparent'>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Navbar