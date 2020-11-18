import React, {useEffect,useState} from 'react'
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList'

// Grab the links
//Display the links
//Delete the links
function App() {
  const [links,setLinks]=useState([])

  const loadLinks=async()=>{
    //make request to our serverless backend
    try{
      const res=await fetch('/.netlify/functions/getLinks')
    const links=await res.json()
    setLinks(links)
    }catch(err){
      console.error(err)

    }
    

  }
  useEffect(()=>{
    loadLinks()
  },[])
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List of Links</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks}/>


      
    </div>
  );
}

export default App;
