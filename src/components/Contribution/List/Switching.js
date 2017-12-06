// @flow
import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import Button from "material-ui/Button"
import { compose, lifecycle, withState, type HOC } from "recompose"

type ItemProps = {
  mutate: *,
  onChange: (show: boolean) => void
}

const hideContribution = async (mutate: *, onChange: (show: boolean) => void) => {
  await mutate({
    variables: { repoFullName: "apollographql/apollo-client" }
  })
  await onChange(false)
}

const HideComponent = ({ mutate, onChange }: ItemProps) => (
  <Button raised color='accent' onClick={() => hideContribution(mutate, onChange)}>
    非表示
  </Button>
)

const hideRepository = gql`
  mutation ContributionMutation {
    hideContribution(id: 1) {
      id
    }
  }
`

const Hide = graphql(hideRepository)(HideComponent)

const showContribution = async (mutate: *, onChange: (show: boolean) => void) => {
  await mutate({
    variables: { repoFullName: "apollographql/apollo-client" }
  })
  await onChange(false)
}

const ShowComponent = ({ mutate, onChange }: ItemProps) => (
  <Button raised color='primary' onClick={() => showContribution(mutate, onChange)}>
    表示
  </Button>
)

const showRepository = gql`
  mutation ContributionMutation {
    showContribution(id: 1) {
      id
    }
  }
`

const Show = graphql(showRepository)(ShowComponent)

type Props = {
  initShow: boolean
}

type State = {
  show: boolean,
  setShow: (show: boolean) => void
}

const Plain = ({ show, setShow }: State) =>
  (show ? <Show onChange={() => setShow(false)} /> : <Hide onChange={() => setShow(true)} />)

async function componentWillMount () {
  const { initShow, setShow }: Props & State = await this.props
  await setShow(initShow)
}

const enhance: HOC<State, Props> = compose(
  withState("show", "setShow", false),
  lifecycle({
    componentWillMount
  })
)

export default enhance(Plain)
