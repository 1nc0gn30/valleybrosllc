import React from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import './ParticlesContainer.css';

class ParticlesContainer extends React.PureComponent {
  async customInit(engine) {
    await loadStarsPreset(engine);
  }

  render() {
    const options = {
      preset: 'stars',
      particles: {
        color: {
          value: ["#0000FF", "#800080"] // Blue and Purple colors
        },
      },
      background: {
        color: "#120318", // Solid background color
      },
      // Other options from the fire preset can be overridden here as well
    };

    return (
      <div className="particles-container">
        <Particles className="particles-fullscreen" options={options} init={this.customInit} />
      </div>
    );
  }
}

export default ParticlesContainer;
