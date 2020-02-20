import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <main>
        <h1>Not Found</h1>
        <iframe
          title="four oh four"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6IJB0aD8gSA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <p>Too doo doo doo doo doo doo doo</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
