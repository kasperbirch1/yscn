import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const FrontpageVideo = () => {
  const data = useStaticQuery(graphql`
    query {
        contentfulAsset(title: {eq: "yscn-mobile"}) {
          title
          file {
            url
          }
        }
      }
      `)
  console.log("FrontpageVideo", data.contentfulAsset.file.url);

  return (
    <>
      <video data-module="video" playsinline autoplay="autoplay" muted="muted" loop="loop" style={{ width: '100%', display: 'block', overflow: 'hidden' }} >
        <source src={data.contentfulAsset.file.url} type="video/mp4" />
      </video>
    </>
  )
}

export default FrontpageVideo
