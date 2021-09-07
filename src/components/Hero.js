import Particles from "react-tsparticles";
import React from "react";
import "../styles/hero.css";

function Hero({ particlesLoaded, particlesInit }) {
  return (
    <div className="hero">
      <Particles
        className="particle"
        id="root"
        init={particlesInit}
        loaded={particlesLoaded}
        height={"100vh"}
        options={{
          background: {
            color: {
              value: "#ffffff0",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 50,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="glass"></div>
      <h1 className="hero__title">
        <span> hi,</span> <span>i'm lawal,</span> <span>web developer</span>
      </h1>
      <p className="hero__paragraph">frontend developer / react expert</p>

      <div className="box"></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
    </div>
  );
}

export default Hero;
