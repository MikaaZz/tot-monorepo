import './_page01.scss'

import Main_Video from 'libs/ui/src/lib/Video/Video'
import Text_image from '../../components/Text_image/Text_image'
import Card_image from '../../components/Card_image/Card_image'
import Footer_return from '../../components/Footer_return/Footer_return'

const Page01 = () => {
  return (
    <>
      <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/750092871?h=02ba4bb5a7'
      />
      <main className='main-tag__background'>
        <span className='page01-content__pattern'></span>
        <Text_image
          title='Por que estou aqui?'
          text='Você já imaginou como seria conviver com outras pessoas sem a comunicação? Muito provavelmente a forma como nos relacionamos e convivemos em sociedade seria muito diferente.'
          imageLink='../../assets/page01/imageCard.png'
          imageAlt='Astronauta acenando na galáxia'
        />
        <Card_image
          paragraph={
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
            </>
          }
          imageLink='../../assets/page01/CardAastronauta.png'
          imageAlt=''
        />
        <div className='pageOne__videoContainer'>
          <p className='pageOne__videoContainer--text'>
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
          <div className='pageOne__videoContainer--video'>
            <iframe
              height='100%'
              width='100%'
              src='https://www.youtube.com/embed/6SxhT1OMT3o'
            />
          </div>
        </div>
        <Footer_return />
      </main>
    </>
  )
}

export default Page01
