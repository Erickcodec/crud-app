import loading from "../../assets/loading.svg";

export default function Loading({ width }) {
  return (
    <img
      src={loading}
      alt="Loading..."
      width={width}
      style={{ margin: "0 auto" }}
    />
  );
}
