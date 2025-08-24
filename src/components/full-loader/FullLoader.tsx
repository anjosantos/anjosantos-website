type FullLoaderProps = {
  isLoading: boolean;
};

const FullLoader: React.FC<FullLoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <section className="loader-container">
          <div className="stars" />
          <div className="spaceship">
            <div className="body" />
            <div className="window" />
            <div className="fin fin-left" />
            <div className="fin fin-right" />
            <div className="flame" />
          </div>
          <div className="caption">Calibrating Hyperdrive. Please hold tight!</div>

          <style>
            {`
              .loader-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: rgb(3, 1, 21);
                overflow: hidden;
                z-index: 9999;
              }

              /* === STARFIELD === */
              .stars {
                position: absolute;
                top: -200px;
                left: 0;
                width: 100%;
                height: 125vh;
                background: radial-gradient(2px 2px at 20% 30%, white, transparent),
                            radial-gradient(1.5px 1.5px at 70% 60%, white, transparent),
                            radial-gradient(2px 2px at 50% 80%, white, transparent),
                            radial-gradient(1px 1px at 90% 20%, white, transparent),
                            radial-gradient(1.5px 1.5px at 40% 50%, white, transparent);
                background-size: 200px 200px;
                background-repeat: repeat;
                animation: starScroll 2s linear infinite;
              }

              @keyframes starScroll {
                from { transform: translateY(0); }
                to { transform: translateY(200px); }
              }

              /* === SPACESHIP === */
              .spaceship {
                position: relative;
                width: 40px;
                height: 80px;
                background: #ccc;
                border-radius: 50% 50% 10px 10px;
                animation: float 2s ease-in-out infinite;
                z-index: 10;
              }

              .spaceship .body {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 30px;
                height: 60px;
                background: linear-gradient(to bottom, #eee, #999);
                border-radius: 15px 15px 8px 8px;
              }

              .spaceship .window {
                position: absolute;
                top: 15px;
                left: 50%;
                transform: translateX(-50%);
                width: 14px;
                height: 14px;
                background: #00bfff;
                border-radius: 50%;
                box-shadow: 0 0 8px #00bfff;
              }

              .spaceship .fin {
                position: absolute;
                bottom: 10px;
                width: 0;
                height: 0;
                border-top: 22px solid transparent;
                border-bottom: 0 solid transparent;
              }

              .spaceship .fin-left {
                left: -20px;
                border-right: 20px solid red;
              }

              .spaceship .fin-right {
                right: -20px;
                border-left: 20px solid red;
              }

              .spaceship .flame {
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                width: 12px;
                height: 20px;
                background: radial-gradient(circle at 50% 0%, #ff4500, #ff0);
                border-radius: 50% 50% 50% 50%;
                animation: flameFlicker 0.3s infinite alternate;
                filter: blur(1px);
              }

              /* === CAPTION === */
              .caption {
                margin-top: 50px;
                color: #30de3c;
                font-family: monospace;
                font-size: 16px;
                text-align: center;
                text-shadow: 0 0 8px #30de3c, 0 0 12px #30de3c;
                animation: blink 1.5s infinite;
                z-index: 10;
              }

              @keyframes blink {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0.5; }
              }

              /* Animations */
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }

              @keyframes flameFlicker {
                0% { transform: translateX(-50%) scaleY(1); opacity: 1; }
                100% { transform: translateX(-50%) scaleY(1.3); opacity: 0.7; }
              }
            `}
          </style>
        </section>
      )}
    </>
  );
};

export default FullLoader;
