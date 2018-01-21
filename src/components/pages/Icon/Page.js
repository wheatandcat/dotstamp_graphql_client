// @flow
import React from "react"
import styled from "styled-components"
import MuiPaper from "material-ui/Paper"
import Divider from "material-ui/Divider"
import MuiDropzone from "react-dropzone"
import MuiButton from "material-ui/Button"
import MuiTypography from "material-ui/Typography"

const Paper = styled(MuiPaper)`
  margin: 1rem;
  min-width: 50rem;
  max-width: 100rem;
`

const ImageZone = styled.div`
  display: flex;
  padding: 2rem;
  height: 18rem;
`

const Drop = styled.div`
  width: 100%;
`

const Dropzone = styled(MuiDropzone)`
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: #c5c5c5;
  border-style: dashed;
  background-color: #f4f3f4;
`

const Center = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 300;
`

const Img = styled.img`
  width: calc(100% - 2px);
  border-width: 1px;
  border-color: #c5c5c5;
  border-style: solid;
`

const Button = styled(MuiButton)`
  width: calc(50%) !important;
  min-width: 5rem !important;
  padding: 0 !important;
`

const ButtonContainer = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  max-width: 14rem;
  width: 25%;
  margin-right: 1rem;
`

const Typography = styled(MuiTypography)`
  display: flex !important;
  align-items: center !important;
  padding: 1rem;
`

export default () => (
  <div>
    <Paper>
      <Typography type="headline" component="h2">
        <div>アイコン設定</div>
      </Typography>
      <Divider />
      <ImageZone>
        <ImageContainer>
          <Img src="https://dotstamp.com/static/files/character/default4.png" />
          <ButtonContainer>
            <Button raised color="primary" mini>
              編集
            </Button>
            <Button raised color="accent" mini>
              削除
            </Button>
          </ButtonContainer>
        </ImageContainer>
        <ImageContainer>
          <Img src="https://dotstamp.com/static/files/character/default4.png" />
          <ButtonContainer>
            <Button raised color="primary" mini>
              編集
            </Button>
            <Button raised color="accent" mini>
              削除
            </Button>
          </ButtonContainer>
        </ImageContainer>
        <Drop>
          <Dropzone onDrop={() => {}}>
            <Center>
              ドラッグ&ドロップ<br />
              またはクリックでファイルをアップロード
            </Center>
          </Dropzone>
        </Drop>
      </ImageZone>
    </Paper>
  </div>
)
