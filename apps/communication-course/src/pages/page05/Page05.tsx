import './_page05.scss'

// COMPONENTS
import Main_Video from 'libs/ui/src/lib/Video/Video'
import Text_image from '../../components/Text_image/Text_image'
import Slider from '../../components/Slider/Slider'

import Footer_return from '../../components/Footer_return/Footer_return'

const Page05 = () => {
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
                O storytelling é uma técnica de comunicação, onde o objetivo é
                contar uma história, muitas vezes para entreter e ganhar a
                atenção do público.
              </p>
              <h3>
                Ela pode ser utilizada para criar narrativas que se conectam,
                emocionam e engajam, trazendo uma vinculação com o ouvinte.
              </h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <div className='videoContainer'>
          <p className='videoContainer--text'>
            Confira a palestra do Will Stephen – Como parecer inteligente
          </p>
          <div className='iframeContainer--video'>
            <iframe
              height='100%'
              width='100%'
              src='https://www.youtube.com/embed/nZ3L7sdOuhs'
            />
          </div>
        </div>
        <Text_image
          containerContet={
            <>
              <p>
                Uma história pode ser contada de diversas formas: por textos,
                como livros, por áudio, podendo ser um podcast, por vídeos, em
                formato de série por exemplo e por aí vai.
              </p>
              <p>
                São muitas as possibilidades e o importante é que você entenda
                qual é o melhor formato a ser explorado. Pois vai depender muito
                do seu objetivo, quem você quer atingir e como.
              </p>
              <h3>
                Grandes marcas usam desta técnica para chamar atenção do público
                e cativá-los. Quer ver alguns exemplos?
              </h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
          directionContainer='directionColumnReverse'
        />
        <Slider
          sliderContents={[
            {
              id: 1,
              title: 'Dove:',
              text: 'De acordo com a Visão no site da empresa, o objetivo de seus produtos é transformar a beleza em fonte de confiança, não ansiedade. Na sua campanha Retratos Real da Beleza, um artista forense fez desenhos de pessoas de acordo com as descrições delas mesmas. Depois ele fazia novos desenhos de acordo com a descrição de outras pessoas.',
              textTwo:
                'Os resultados foram tocantes, mostrando como a autocrítica pode apagar a beleza natural de uma pessoa. ',
              imageLink: '',
              haveVideo: true,
              videoLink: 'Il0nz0LHbcM',
              videoDescription: 'Veja a estratégia assistindo o vídeo:',
            },
            {
              id: 2,
              title: 'Heineken:',
              text: 'A Heineken brincou com a ideia de que cerveja e futebol é só para mulher em sua campanha para a final da Champion’s League. No anúncio, três homens eram abordados e precisavam convencer as namoradas a ir a um spa para ganharem ingressos para um evento da Heineken no dia da final. Para a surpresa de todos, as mulheres foram enviadas a Milão para aproveitar a final ao vivo.',
              textTwo:
                'A pegadinha mostrou o perfil aberto e democrático da marca, convenceu mulheres de que Heineken também é para elas e ainda captou o interesse do público. Tudo isso sem necessariamente falar sobre cerveja. Se ainda não assistiu, veja aqui: ',
              imageLink: '',
              haveVideo: true,
              videoLink: 'wrmKl_HV4-A',
              videoFont:
                'Fonte: Agência Orion (https://agenciaorin.com.br/storytelling/) ',
            },
          ]}
        />
        <Text_image
          containerContet={
            <>
              <h3>
                Histórias bem contadas prendem as pessoas, faz com que elas
                tenham interesse no produto, negócio, conectando clientes e
                empresa.
              </h3>
              <p>
                Quando alguém conta uma história, você precisa prestar atenção,
                certo? Mencionamos no decorrer de todo este curso, como a
                comunicação é importante para atingirmos objetivos. Por isso,
                saber ouvir também é necessário para compreender a mensagem que
                está sendo passada. E que tal praticarmos este sentido?
              </p>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <div className='videoContainer videoContainer--reverse'>
          <p className='videoContainer--text'>
            Trouxe uma palestra de Julian Treasure, palestrante internacional de
            alto nível em habilidades de som e comunicação. Nela, ele fala
            justamente sobre isso, como podemos praticar nossa audição, veja:
          </p>
          <div className='iframeContainer--video'>
            <iframe
              height='100%'
              width='100%'
              src='https://www.youtube.com/embed/cSohjlYQI2A'
            />
          </div>
        </div>
        <Footer_return />
      </main>
    </>
  )
}

export default Page05
