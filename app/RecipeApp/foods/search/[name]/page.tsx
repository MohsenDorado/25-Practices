"use client"
import Foodsearch from '@/components/RecipeApp/Foodsearch';
import { useParams } from 'next/navigation'
import React from 'react'

const SearchFoodPage = () => {
    const params=useParams();
  return (
    <div>
      <Foodsearch query={params.name}/>
    </div>
  )
}

export default SearchFoodPage