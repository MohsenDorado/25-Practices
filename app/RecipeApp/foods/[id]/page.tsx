"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const FoodSearchPage = () => {
    const params=useParams();
  return (
    <div>FoodPage of {params.id}</div>
  )
}

export default FoodSearchPage