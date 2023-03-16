import ReactHlsPlayer from "react-hls-player";

export default function HoverHlsPlayer(props) {
  return (
    <ReactHlsPlayer
      src={props.meta.courseVideoPreview.link}
      autoPlay={true}
      controls={false}
      muted="muted"
      width="100%"
      height="auto"
    />
  );
}
