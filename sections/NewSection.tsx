interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section({ name = "Capy Dax" }: Props) {
  return <div>Hello {name}</div>
}