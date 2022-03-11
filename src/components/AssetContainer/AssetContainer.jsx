
import Asset from '../Asset/Asset'
import "./assetContainer.css"
import { useEffect } from 'react'

async function getAssets() {
    const response = await fetch('http://localhost:3005/hosts')
    const data = await response.json()
    console.log(data[0])
    return data
}

useEffect(getAssets(), [])

const AssetContainer =() => {
//   const data = getAssets()
  return (
    <h1>data</h1>
  )
}

export default AssetContainer