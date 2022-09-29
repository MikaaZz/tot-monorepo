/* eslint-disable react/jsx-pascal-case */
import './_page06.scss'

// COMPONENTS
import Main_Video from 'libs/ui/src/lib/Video/Video'
import Text_image from '../../components/Text_image/Text_image'
import Card_image from '../../components/Card_image/Card_image'
import Complement_material from '../../components/Complement_material/Complement_material'

const Page06 = () => {
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
                A CNV busca estabelecer relacionamentos de confiança, baseados
                na sinceridade e na empatia.
              </p>
              <p>
                Não é necessário que o outro com quem você se comunica conheça
                as técnicas da CNV. Você deve estar sempre focado em manter os
                princípios e utilizá-los.
              </p>
              <h3>
                “Num nível mais profundo, ela é um lembrete permanente para
                mantermos nossa atenção concentrada lá onde é mais provável
                acharmos o que procuramos” (Livro CNV)
              </h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <h3 className='pageSix__title'>
          Para entender como funciona essa forma de comunicação, você deve
          conhecer que ela tem como base os quatro componentes do modelo da
          comunicação não violenta. São eles:
        </h3>
        <Card_image
          cardContent={
            <ul className='main-listInteract__textContainer__list'>
              <li
                className='main-listInteract__textContainer__list--item'
                style={{ cursor: 'default' }}>
                <h3>1</h3>
                <p>Observação: analise a situação sem fazer julgamento;</p>
              </li>
              <li
                className='main-listInteract__textContainer__list--item'
                style={{ cursor: 'default' }}>
                <h3>2</h3>
                <p>
                  Sentimento: identifique o que a situação provoca em você:
                  mágoa, medo, alegria, irritação, entre outros;
                </p>
              </li>
              <li
                className='main-listInteract__textContainer__list--item'
                style={{ cursor: 'default' }}>
                <h3>3</h3>
                <p>
                  Necessidades: reconheça quais são os desejos vinculados ao
                  sentimento;
                </p>
              </li>
              <li
                className='main-listInteract__textContainer__list--item'
                style={{ cursor: 'default' }}>
                <h3>4</h3>
                <p>
                  Pedido: elabore a sua solicitação após reconhecer a causa
                  raiz, de forma clara e específica.
                </p>
              </li>
            </ul>
          }
          imageLink='../../assets/page01/CardAastronauta.png'
          imageAlt=''
        />
        <Text_image
          containerContet={
            <>
              <p>
                Vamos entender na prática? Imagine que você e um colega de
                trabalho estão trabalhando na elaboração de um projeto que irá
                impactar diretamente na rotina da sua equipe. Em determinado
                momento, o seu colega apresenta a proposta para o Gerente da
                área e ganha todos os méritos. Neste caso, aplicando a CNV, você
                pode elaborar o início da conversa da seguinte forma:
              </p>
              <h3>
                “João, ao saber que hoje de manhã você apresentou o nosso
                projeto para o Gerente sem me convidar, fiquei frustrado pois
                trabalhamos juntos na construção da proposta e só você recebeu
                os devidos reconhecimentos. Em uma próxima oportunidade, você
                pode me convidar na hora da apresentação?”
              </h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
          directionContainer='directionColumnReverse'
        />
        <Complement_material
          textDescription='Note que dessa forma, destaca-se os quatro componentes da CNV claramente. Com essa técnica, todo processo de comunicação, seja ele verbal ou por outros meios, torna-se assertivo.'
          textDescriptionTwo='À medida que esse processo é conhecido por você, é possível solicitar que as pessoas ao seu redor também se comuniquem assim. Solicitando primeiramente para que te tragam a situação em específico e qual o sentimento gerado a partir da ação, para então compreender o que pode ser feito de diferente.'
          buttonLink=''
          buttonLinkDownload=''
          buttonText='Baixar material'
          imageLink='../../assets/Earth-map.png'
          imageAlt=''
        />
        <h3 className='pageSix__title'>
          Quanto maior a sua consciência em se expressar com honestidade por
          meio dos quatro componentes, mais fácil será também receber com
          empatia a partir da técnica.
        </h3>
        <Complement_material
          textDescription='Para que você finalize os estudos, saiba mais sobre CNV com este material incrível que construímos, com mais dicas e exercícios.'
          buttonLink=''
          buttonLinkDownload=''
          buttonText='Baixar material'
          imageLink='../../assets/Earth-map.png'
          imageAlt=''
        />
      </main>
    </>
  )
}

export default Page06
