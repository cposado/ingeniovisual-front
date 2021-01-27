import React from 'react'
import tw, { styled } from 'twin.macro'

const WorkContainer = styled.div`
  ${tw`relative flex justify-items-center border border-white`};
  a {
    ${tw`absolute bottom-0 left-0 bg-black text-center z-10 block w-full`};
  }
  p {
    ${tw`font-serif uppercase text-sm text-white py-4 px-4 `};
  }
`

const Work = ({ data }) => (
  <WorkContainer>
    <a href={data.link}>
      <p>{data.name}</p>
    </a>
    <img src={data.thumb && data.thumb.url} alt={data.name} />
  </WorkContainer>
)

export default Work