import './_page02.scss'

// COMPONENTS
import Main_Video from 'libs/ui/src/lib/Video/Video'
import Footer_return from '../../components/Footer_return/Footer_return'
import List_interact from '../../components/List_interact/List_interact'
import Valueable_tip from '../../components/Valuable_tip/Valuable_tip'
import Constelation_interact from '../../components/Constelation_interact/Constelation_interact'
import Card_image from '../../components/Card_image/Card_image'
import Button_donwload from 'libs/ui/src/lib/Button/Button_download'
import Slider from '../../components/Slider/Slider'

// REACT
import { useState } from 'react'

const Page02 = () => {
  const [videoShowDisplay, setVideoShowDisplay] = useState('videoShowDisplay')
  const [videoShowOpacity, setVideoShowOpacity] = useState('videoShowOpacity')

  return (
    <>
      <Main_Video
        controls={true}
        link='https://player.vimeo.com/video/750092871?h=02ba4bb5a7'
      />
      <main className='main-tag__background'>
        <span className='content__pattern'></span>
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
          <h3 className='page02__sectionTwo--title'>
            No caso de comunicações em estilo de apresentações, temos dicas
            valiosas:
          </h3>
          <Constelation_interact />
          <h4 className='page02__sectionTwo--title'>
            Com estes pontos, você vai compreender muito melhor como gerar
            engajamento neste público e quais emoções devem ser geradas.
          </h4>
        </section>
        <section className='page02__sectionThree'>
          <h3 className='page02__sectionThree--title'>
            Chegou a hora de organizar o seu raciocínio para construir a sua
            comunicação a partir das informações coletadas anteriormente, não é
            mesmo?
          </h3>
          <Card_image
            cardContent={
              <>
                <p>
                  Existem muitas formas de construir o pensamento antes de
                  iniciar a construção da comunicação de fato. Aqui, vamos te
                  apresentar o Mapa Mental, uma ferramenta criada pelo psicólogo
                  Tony Buzan.
                </p>
                <p>Preparamos um material completo sobre o assunto.</p>
                <Button_donwload link='' text='Baixar material' />
              </>
            }
            imageLink='../../assets/page01/CardAastronauta.png'
            imageAlt='Foto do psicólogo Tony Buzan'
          />
        </section>
        <section className='page02__sectionFour'>
          <h3 className='page02__sectionFour--title'>
            Descubra agora 10 maneiras de amplificar sua comunicação:
          </h3>
          <div className={`iframeContainer--video`}>
            <iframe
              height='100%'
              width='100%'
              src='https://www.youtube.com/embed/R1vskiVDwl4'
            />
          </div>
        </section>
        <section className='page02__sectionFive'>
          <h3 className='page02__sectionFive--title'>
            Estar preparado(a) para uma conversa é essencial, por isso, pense em
            alguma situação que já passou ou de preferência, que ainda vai
            passar. Uma conversa importante, seja com um cliente, colaborador ou
            gestor.
          </h3>
          <Slider
            sliderContents={[
              {
                id: 1,
                title: '',
                text: 'Estar preparado(a) para uma conversa é essencial, por isso, pense em alguma situação que já passou ou de preferência, que ainda vai passar. Uma conversa importante, seja com um cliente, colaborador ou gestor.',
                imageLink: '',
              },
              {
                id: 2,
                title: ' Então exercite:',
                text: 'Se você passou recentemente por uma situação assim, relembre e anote quais pontos da conversa você melhoraria, quais momentos deveria ter debatido mais sobre o assunto, pontos positivos do diálogo, se a sua postura estava adequada, entre outros pontos.',
                textTwo:
                  'Caso você ainda vá passar por uma situação parecida, reflita e anote o que você precisa saber, suas dúvidas, apontamentos, saiba quem é o público, local que',
                imageLink: '',
              },
            ]}
          />
        </section>
        <Footer_return />
      </main>
    </>
  )
}

export default Page02
