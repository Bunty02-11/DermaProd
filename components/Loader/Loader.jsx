import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {
  return (
    <>
      <div
        className={`d-flex align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(0, 0, 0, 1)",
        }}
      >
        <BounceLoader color={"#c39200"} size={60} />
      </div>
    </>
  );
};
export default Loader;
