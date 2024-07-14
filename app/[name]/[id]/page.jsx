import React from 'react'

const Page = ({params}) => {
  return (
    <>
    <div>Name: {params.name}</div>
    <div>ID: {params.id}</div>
    </>
  )
}

export default Page