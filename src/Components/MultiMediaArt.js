import React from 'react'
import '../Styles/MultiMediaArt.css'

const MultiMediaArt = () => {
  return (
    <div>
      <div id='centered-vids'>
      <div>
      <h1 className='ui purple header'>My Art</h1>
        <br></br>
        <h3>Arboreal Requiem</h3>
      <iframe title='arboreal requiem' src="https://player.vimeo.com/video/46844898" width="640" height="472" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <p><a href="https://vimeo.com/46844898">Arboreal Requiem</a> from <a href="https://vimeo.com/user12788476">Matthew Peterson</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      </div>
      <br></br>
      <div>
        <h3>Babel</h3>
      <iframe title='babel' src="https://player.vimeo.com/video/46844899" width="640" height="472" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <p><a href="https://vimeo.com/46844899">Babel</a> from <a href="https://vimeo.com/user12788476">Matthew Peterson</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      </div>
      <br></br>
      <div>
        <h3>Montage</h3>
        <iframe title='montage' src="https://player.vimeo.com/video/46826845" width="640" height="472" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
       <p><a href="https://vimeo.com/46826845">Montage</a> from <a href="https://vimeo.com/user12788476">Matthew Peterson</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      </div>
      <br></br>
      <div>
        <h3>A Gift For The Darkness (to be projected on a loop)</h3>
        <iframe title='a gift for the darkness' width="640" height="472" src="https://www.youtube.com/embed/X6P6OKUe7MA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      </div>
    </div>
 )
}

export default MultiMediaArt
