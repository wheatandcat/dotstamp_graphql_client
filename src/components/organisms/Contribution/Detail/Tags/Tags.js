import React from "react"
import styled from "styled-components"
import Chip from "material-ui/Chip"

type Tag = {
  id: number,
  name: string,
}

type Props = {
  items: Array<Tag>,
}

const Root = styled.div`
  display: flex;

  > div {
    margin: 0.25rem;
  }
`
const Plain = ({ items }: Props) => (
  <Root>{items.map(({ name }) => <Chip key={name} label={name} />)}</Root>
)

export default Plain
