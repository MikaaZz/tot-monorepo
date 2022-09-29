/* eslint-disable react/jsx-pascal-case */
import './_page01.scss'

import Main_Video from 'libs/ui/src/lib/Video/Video'
import Text_image from '../../components/Text_image/Text_image'
import Card_image from '../../components/Card_image/Card_image'
import Footer_return from '../../components/Footer_return/Footer_return'
import Button from 'libs/ui/src/lib/Button/Button'
import Button_donwload from 'libs/ui/src/lib/Button/Button_download'

const Page01 = () => {
  function topPage() {
    window.scrollTo(0, 0)
  }
  topPage()
  return (
    <>
      <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/750092871?h=02ba4bb5a7'
      />
      <main className='main-tag__background'>
        <span className='content__pattern'></span>
        <Text_image
          containerContet={
            <>
              <h3>Por que estou aqui?</h3>
              <p>
                Você já imaginou como seria conviver com outras pessoas sem a
                comunicação? Muito provavelmente a forma como nos relacionamos e
                convivemos em sociedade seria muito diferente.
              </p>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt='Astronauta acenando na galáxia'
        />
        <Card_image
          cardContent={
            <>
              <p>
                Tenha em mente que esse curso só vai fazer diferença na sua
                vida, caso você exercite o que ensinamos aqui. Recomendamos que
                reserve tempos distintos para estudar cada etapa, acessar o
                material complementar e colocar em prática o que aprendeu.
                Comunicação é aperfeiçoamento.
              </p>
              <p>
                <strong>
                  Estude e navegue no curso, no seu tempo, sem pressa!
                </strong>
              </p>
              <Button_donwload
                link=''
                interaction={(e) => {
                  e.preventDefault()
                }}
                text='Seguir em frente'
              />
            </>
          }
          imageLink='../../assets/page01/CardAastronauta.png'
          imageAlt=''
        />
        <div className='videoContainer'>
          <p className='videoContainer--text'>
            E para começarmos, trouxe para você uma entrevista onde a Jornalista
            Vânia Bueno, prestou ao TEDx, comunicadora que escolheu o
            desenvolvimento humano e organizacional como trabalho e como causa.
            <br />
            Sua motivação é estimular reflexões e facilitar conversas sobre a
            importância da comunicação para a qualidade da convivência na vida e
            no trabalho.
            <br />
            Entende a comunicação como um aprendizado essencial para qualquer
            pessoa e um processo para a vida toda.
          </p>
          <div className='iframeContainer--video'>
            <iframe
              height='100%'
              width='100%'
              src='https://www.youtube.com/embed/6SxhT1OMT3o'
            />
          </div>
        </div>
        <Footer_return navPage='/intro01' />
      </main>
    </>
  )
}

export default Page01
