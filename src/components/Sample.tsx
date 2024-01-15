type Props = {
  title: string;
  name?: string;
};

/**
 * @param props.title タイトル
 * @param props.name 名前
 * @returns
 */
const Sample = (props: Props) => {
  return (
    <div>
      {props.title}
      {props.name != null && <span>{props.name ?? ""}</span>}
    </div>
  );
};

export default Sample;
