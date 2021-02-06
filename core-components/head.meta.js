import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const HeadMeta = props => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      {/**GLOBAL FONT***/}
      <link href="https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700&display=swap" rel="stylesheet" />

      {/***FAVICONS AND APPICONS***/}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" sizes="192x192" href="/touch-icon.png" />
      <link rel="apple-touch-icon" href="/touch-icon.png" />
      <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />


    </NextHead>

  </>)

HeadMeta.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default HeadMeta
