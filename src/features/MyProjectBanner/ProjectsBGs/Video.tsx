import Styles from "./Video.module.scss";

export default function Video({ src }: { src: string }) {
  return <video autoPlay className={Styles.root} src={src} />;
}
