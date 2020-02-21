import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  // Initialising the canvas
  var Canvas = React.useRef(), //document.querySelector('canvas'),
    ctx,
    drops = [],
    letters = '0101',
    // Setting up the columns
    fontSize = 18,
    columns,
    // Setting the width and height of the canvas
    width,
    height

  React.useEffect(() => {
    ctx = Canvas.current.getContext('2d')
    width = Canvas && Canvas.current.clientWidth
    height = Canvas && Canvas.current.clientHeight
    columns = width / fontSize
    letters = letters.split('')

    // Canvas.current.width = width
    // Setting up the drops
    for (var i = 0; i < columns; i++) {
      drops[i] = 1
    }

    // Loop the animation
    setInterval(draw, 150)
  }, [])

  // Setting up the draw function
  function draw() {
    // Setting up the letters

    ctx.fillStyle = 'rgba(0, 0, 0, .75)'
    ctx.fillRect(0, 0, width, height)
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)]
      ctx.fillStyle = '#285c73'
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      drops[i]++
      if (drops[i] * fontSize > height && Math.random() > 0.95) {
        drops[i] = 0
      }
      ctx.globalAlpha = 0.25
    }
  }

  return (
    <>
      <SEO title="404: Not found" />
      <main>
        <div className="inner-404">
          <h1 className="glitch" data-text="404 NOT FOUND">
            404 NOT FOUND
          </h1>
          <canvas ref={Canvas} />
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
