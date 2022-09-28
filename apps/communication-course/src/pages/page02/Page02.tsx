import './_page02.scss'

import Main_Video from 'libs/ui/src/lib/Video/Video'
import Footer_return from '../../components/Footer_return/Footer_return'
import List_interact from '../../components/List_interact/List_interact'
import Valueable_tip from '../../components/Valuable_tip/Valuable_tip'
import Constelation_interact from '../../components/Constelation_interact/Constelation_interact'

const Page02 = () => {
  return (
    <>
      <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/750092871?h=02ba4bb5a7'
      />
      <main className='main-tag__background'>
        <span className='page02-content__pattern'></span>
        <section className='page02__sectionOne'>
          <h2 className='page02__sectionOne--title'>
            Além disso, é necessário compreender qual é o público-alvo a quem se
            destina a comunicação.
          </h2>
          <List_interact
            imageLinkOne=''
            imageAltOne=''
            imageLinkTwo=''
            imageAltTwo=''
            imageLinkThree=''
            imageAltThree=''
          />
          <h4 className='page02__sectionOne--title'>
            Você falará presencialmente ou digitalmente? Será uma conversa mais
            informal, em uma mesa de café ou uma palestra em um auditório? É uma
            comunicação mais intimista como um jantar ou uma gravação de vídeo
            para um grande público?
          </h4>
          <h4 className='page02__sectionOne--title'>
            Pense nisso e terá assertividade!
          </h4>
          <Valueable_tip />
        </section>
        <section className='page02__sectionTwo'>
          <h2 className='page02__sectionTwo--title'>
            No caso de comunicações em estilo de apresentações, temos dicas
            valiosas:
          </h2>
          <Constelation_interact />
          <h4 className='page02__sectionTwo--title'>
            Com estes pontos, você vai compreender muito melhor como gerar
            engajamento neste público e quais emoções devem ser geradas.
          </h4>
        </section>
        <section></section>
        <Footer_return />
      </main>
    </>
  )
}

export default Page02
