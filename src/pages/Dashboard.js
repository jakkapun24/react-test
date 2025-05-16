import React,{useState,useEffect} from 'react'

export default function Dashboard() {


   const [data, setData] = useState([

    {
      id:'1',
      title:'data'
    },
     {
      id:'2',
      title:'map'
    },
   ])

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const res = await fetch('api/powermeter')
  //     const data = await res.json()
  //     setData(data)
  //   }

  //   getPosts()
  // }, [])

console.log(data)

  return (
    <>
    <div>dashboard</div>
    {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      </>
  )
}
