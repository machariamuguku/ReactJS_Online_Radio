import React, { Component } from 'react'

class SoundAnalyser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audio: null
        }
    };

    // crete the display
    createFrequencyBar = () => {
        const audioCtx = new AudioContext();
        audioCtx.crossOrigin = "anonymous";//important for CORS

        //Create audio source
        //Here, we use an audio file, but this could also be e.g. microphone input
        const audioEle = new Audio();
        audioEle.crossOrigin = "anonymous";//important for CORS

        audioEle.src = 'http://91.121.165.88:8116/stream';//insert file name here
        audioEle.autoplay = true;
        audioEle.preload = 'auto';
        const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

        //Create analyser node
        const analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 256;
        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Float32Array(bufferLength);

        //Set up audio node network
        audioSourceNode.connect(analyserNode);
        analyserNode.connect(audioCtx.destination);

        //Create 2D canvas
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const canvasCtx = canvas.getContext('2d');
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);


        function draw() {
            //Schedule next redraw
            requestAnimationFrame(draw);

            //Get spectrum data
            analyserNode.getFloatFrequencyData(dataArray);

            //Draw black background
            canvasCtx.fillStyle = 'rgb(0, 0, 0)';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

            //Draw spectrum
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let posX = 0;
            for (let i = 0; i < bufferLength; i++) {
                const barHeight = (dataArray[i] + 140) * 2;
                canvasCtx.fillStyle = 'rgb(' + Math.floor(barHeight + 100) + ', 50, 50)';
                canvasCtx.fillRect(posX, canvas.height - barHeight / 2, barWidth, barHeight / 2);
                posX += barWidth + 1;
            }
        };

        draw();
    }
    // end of crete the display

    toogleStates = () => {

        this.setState({ audio: !this.state.audio })

    }

    render() {

        return (
            <div>
                <button onClick={this.toogleStates}> {this.state.audio ? "washa radio" : 'zima hiyo shit!'} </button>
                {this.state.audio ? this.createFrequencyBar : ''}
            </div>
        )
    }

}

export default SoundAnalyser;