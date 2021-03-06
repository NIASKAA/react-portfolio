import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './styles.css'

const DiscordBot = () => {
    const redirect = () => {
        window.location.href='https://github.com/NIASKAA/Discord-Bot-JS'
    }
    const imgStyle = {
        width: '60%'
    }
    return (
        <>
            <header class="projectImage">
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="mainText">
                                <h1>Haro The Discord Bot</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="projectSection">
                <article class="body">
                    <h2 class="proTitle">A fun way of interaction</h2>
                        <p class="content">
                            We all play games with our friends right? So it only made sense to do so on Discord, a huge voice communication application made for a community. It
                            was only a matter of time for me to start thinking, how the hell do people make bots? Well, after researching and all I've find that making a bot is fairly easy.
                            In fact, you can do so much with it. Think of making a bot that does some basic function for you and your friends while you game on a Saturday night. That is exactly 
                            how I made mine with minimal yet funny interaction. After awhile, I decided to elevate this bot to a whole new level. I decided to make a rpg game out of it. You heard 
                            right, a actual game inside Discord. It's got the ability to keep track of how much money you make. You can equip weapons, armor, whatever. Imagine the possibility. 
                        </p>
                        <p class="content">Tech Usage: Discord.Js, MongoDB, ytdl-core, ES6 Javascript, ffmpeg, dotenv</p>
                    <Button onClick={redirect} bsPrefix="githubBtn"><span>Take a look?</span></Button>
                </article>
            </section>

            <section class="demoPics text-center">
            <Row class="row">
                <Col class="col">
                <img src="/img/discord1.png" class="rounded" style={imgStyle} alt="discordbot"/>
                </Col>
                <Col class="col">
                <img src={"https://media.giphy.com/media/vfUv5aYjgujNd1WBmp/giphy.gif"} className="gif" style={imgStyle} alt='discordbot2'/>
                </Col>
            </Row>
            </section>
        </>
    )
}

export default DiscordBot
