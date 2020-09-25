import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code modern apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <a>Watch the video</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
