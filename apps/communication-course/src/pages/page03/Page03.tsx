import './_page03.scss'

// COMPONENTS
import Main_Video from 'libs/ui/src/lib/Video/Video'
import Footer_return from '../../components/Footer_return/Footer_return'
import Card_image from '../../components/Card_image/Card_image'
import Text_image from '../../components/Text_image/Text_image'
import Slider from '../../components/Slider/Slider'

const Page03 = () => {
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
              <p>
                Como vimos no vídeo, o conjunto da comunicação reflete a imagem
                que quer passar naquele momento, como por exemplo a imagem de
                uma pessoa mais comunicativa ou mais introvertida. Tudo
                comunica.
              </p>
              <h3>
                Para isso, anote as seis dicas a seguir para melhorar a sua
                comunicação.
              </h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <Slider
          sliderContents={[
            {
              id: 1,
              title: 'Identifique os problemas na sua comunicação: ',
              text: 'Observe as pessoas ao seu redor e de que forma elas se comunicam - podem ser pessoas no dia a dia e também vídeos, filmes e palestras. Busque inspiração nas pessoas para compreender o que eles fazem que você gosta e te atrai, e o que eles fazem que você não gosta e te desmotiva durante uma conversa.',
              textTwo:
                'Dica para exercitar: você pode ainda gravar a sua própria comunicação e escutá-la depois. Seja empático consigo mesmo e escute-se buscando melhorar a forma como você se comunica. Note a entonação, a dicção, o tom da voz e o uso das gírias.',
              imageLink: '',
            },
            {
              id: 2,
              title: 'Leia em voz alta:',
              text: 'Leia textos, de revistas, livros e notícias em voz alta.',
              textTwo:
                'O objetivo é que você passe a escutar mais a sua própria voz, conheça e a reconheça em cada contexto, compreenda qual é a sua forma de falar e identifique as oportunidades de melhoria.',
              imageLink: '',
            },
            {
              id: 3,
              title: 'As palavras e textos possuem características:',
              text: 'A forma que você fala deve respeitar as premissas da língua escrita, ou seja, é extremamente importante considerar os acentos e pontuações, fazendo uso das entonações e pausas necessárias. ',
              imageLink: '',
            },
            {
              id: 4,
              title: 'Pratique a naturalidade:',
              text: 'Os gestos ou movimentos podem atrapalhar a comunicação, por isso, evite treinar a sua comunicação com falas, deixe que os braços e o andar sejam naturais, fluídos. ',
              imageLink: '',
            },
            {
              id: 5,
              title: 'Dica:',
              text: 'O mesmo acontece quando você precisa decorar um texto. Nesse caso, compreenda a ideia central do texto, mas deixe algumas brechas para adaptação, considerando a forma e as palavras que você utiliza no dia a dia.',
              imageLink: '',
            },
            {
              id: 6,
              title: 'Construa uma narrativa:',
              text: 'Utilize metodologias que contribuam para que você conte uma história. A narrativa precisa estar conectada entre si, sem deixar pontas soltas durante a comunicação. ',
              imageLink: '',
            },
            {
              id: 7,
              title: 'Dê atenção ao interlocutor:',
              text: 'Uma das etapas mais importantes da comunicação é escutar o que o outro tem a dizer, por tanto, esteja atento ao seu redor, olhe no olho das pessoas, esteja atento aos sinais corporais que eles fazem e, faça pausas para que possam absorver o que está sendo falado.',
              imageLink: '',
            },
          ]}
        />
        <Footer_return navPage='/intro03' />
      </main>
    </>
  )
}

export default Page03
