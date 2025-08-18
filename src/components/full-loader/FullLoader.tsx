type FullLoaderProps = {
  isLoading: boolean;
};
const FullLoader: React.FC<FullLoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <section
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgb(3, 1, 21)",
            zIndex: 9999,
          }}
        >
          <div
            className="loader"
            style={{
              width: 48,
              height: 48,
              border: "6px solid #ccc",
              borderTop: "6px solid #333",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>
            {`
              @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </section>
      )}
    </>
  );
};

export default FullLoader;
