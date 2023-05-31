import React from 'react'

export default function CardFavorite({dataFavorite}) {
  //console.log(dataFavorite);
  return (
    <div className="div7">Saxophone
                <img src={dataFavorite.imgURL} alt=""/> 
                <p className="title">{dataFavorite.title}</p>
                <p>{dataFavorite.type}</p>
                <p className="price">{dataFavorite.price}</p>
            </div>
  )
}
