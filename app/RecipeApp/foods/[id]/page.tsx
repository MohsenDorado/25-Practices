"use client"
import FoodDetails from '@/components/RecipeApp/FoodDetails';
import { useParams } from 'next/navigation'
import React from 'react'

const FoodSearchPage = () => {
    const params=useParams();
  return (
    <div>
      <FoodDetails id={params.id}/></div>
  )
}

export default FoodSearchPage