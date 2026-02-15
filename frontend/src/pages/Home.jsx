import React, { useEffect, useState } from 'react'
import api from '../services/api'
import Hero from '../components/Hero'
import Amenities from '../components/Amenities'
import FAQ from '../components/FAQ'
import ProjectOverview from '../components/ProjectOverview'
import Connectivity from '../components/Connectivity'
import Construction from '../components/Construction'
import About from '../components/About'
const Home = () => {


    const [content, setContent] = useState(null)

    useEffect(() => {

        const fetchContent = async () => {

            try {

                const response = await api.get("/content")
                setContent(response.data)

            } catch (error) {

                console.log(error)
            }
        }
        fetchContent()
    }, [])

    if (!content) return <div>Loading...</div>

    return (
        <>

            <Hero data={content.hero} />
            <Amenities data={content.amenities} />
            <FAQ data={content.faq} />
            <ProjectOverview data={content.projectOverview} />
            <Connectivity data={content.connectivity} />
            <Construction data={content.constructionUpdates} />
            <About data={content.about} />



        </>
    )
}

export default Home