import React ,{FC} from 'react'

interface podcastProps {
    display : string;
}

const podcast:FC<podcastProps>= ({display}) => {
  return (
    <div>
        <div>This is {display}</div>
    </div>
  )
}

export default podcast;
