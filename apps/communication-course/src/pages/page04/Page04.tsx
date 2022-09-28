import './_page04.scss'

// COMPONENTS
import Main_Video from 'libs/ui/src/lib/Video/Video'
import Footer_return from '../../components/Footer_return/Footer_return'
import Card_image from '../../components/Card_image/Card_image'
import Text_image from '../../components/Text_image/Text_image'
import Slider from '../../components/Slider/Slider'
import Button_donwload from 'libs/ui/src/lib/Button/Button_download'

const Page04 = () => {
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
              <h3>Veja dicas de ouro sobre a escrita:</h3>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <section className='pageFour__sectionOne'>
          <Slider
            sliderContents={[
              {
                id: 1,
                title: 'Escreve melhor quem lê mais: ',
                text: 'Parece clichê, mas é verdade. Que tal, a partir de hoje, organizar um tempo para ler? Organize a sua rotina e o tempo de lazer e separe pelo menos cinco minutos para ler um livro, um artigo ou notícia - priorize leitura de boa qualidade, que tenha referência técnica, que amplie o seu escopo temático e gramatical. A organização te levará ao hábito.',
                imageLink: '',
              },
              {
                id: 2,
                title: 'Tenha um dicionário:',
                text: 'Isso mesmo, mesmo atualmente é necessário que se tenha um dicionário por perto. E aqui eu estou falando daquele dicionário em papel, tudo bem? A internet possui muita coisa, mas nem sempre é confiável. É possível que você já tenha tido dúvidas de gramática e pesquisou no Google e ainda assim ficou em dúvida, não é mesmo? O dicionário irá te solucionar esse tipo de situação!',
                imageLink: '',
              },
              {
                id: 3,
                title: 'Conheça suas dificuldades gramaticais e elimine-as:',
                text: 'Todo mundo tem uma palavra que não sabe ao certo como escreve ou um verbo que não sabe como se conjuga. Estude sobre as suas limitações, pesquise, questione para alguém que é referência em gramática e português e elimine essas dúvidas. ',
                imageLink: '',
              },
              {
                id: 4,
                title: 'Estruture o esboço do texto na cabeça:',
                text: 'Assim como ensinamos você a estruturar as apresentações em público, para você ter uma oratória assertiva e fluída, na escrita, é a mesma coisa! A escrita também precisa ter início, meio e fim.',
                imageLink: '',
              },
              {
                id: 5,
                title: 'Antes de enviar, releia:',
                text: 'Leia e releia quantas vezes forem necessárias até que você esteja seguro com a escrita e com o que você quer comunicar com ela. Em caso de dúvidas, compartilhe com alguém e peça as percepções.',
                imageLink: '',
              },
            ]}
          />
        </section>
        <section className='pageFour__sectionTwo'>
          <div className='pageFour__sectionTwo__textButtonContainer'>
            <p className='pageFour__sectionTwo__textButtonContainer--text'>
              Com essas dicas em mente, faça o download do infográfico a seguir.
              Nele, você encontrará orientações para otimizar a sua comunicação
              escrita para fins profissionais!
            </p>
            <Button_donwload link='' text='Baixar material' download='' />
          </div>
          <img
            className='pageFour__sectionTwo--image'
            src='../../assets/Earth-map.png'
          />
        </section>
        <Text_image
          containerContet={
            <>
              <h3>
                Lembre-se que quando tornamos a escrita um hábito, a comunicação
                flui.
              </h3>
              <p>
                Você já deve ter escutado falar no termo escrita criativa.
                Basicamente, podemos definir que a escrita criativa é ter gosto
                por escrever, sem se amedrontar com o processo.
              </p>
              <p>
                Você pode começar a praticar a escrita de diversas formas -
                podem ser cartas, mensagens, publicações nas redes sociais. Não
                necessariamente você precisa divulgar os textos. A intenção
                genuína de sentar, refletir, estruturar a mensagem pensando no
                começo, meio e fim e escrever é uma forma de melhorar a
                capacidade de escrever.
              </p>
            </>
          }
          imageLink='../../assets/page01/imageCard.png'
          imageAlt=''
        />
        <Card_image
          cardContent={
            <>
              <h3>
                Atividade: Que tal pegar uma folha de papel e começar hoje
                mesmo?
              </h3>
              <h5>
                Comece falando sobre um assunto que gosta. Como, por exemplo:{' '}
              </h5>
              <ul>
                <li>- Um esporte que gosta e seus benefícios;</li>
                <li>- Sobre uma viagem inesquecível;</li>
                <li>- Um sonho que quer realizar;</li>
                <li>- Uma receita e como ela deve ser preparada;</li>
                <li>
                  - Se você é super ligado em tecnologias, escreva sobre isso.
                </li>
              </ul>
              <p>
                Ideias não faltam e com certeza, assunto também não. Não se
                esqueça de estruturar, com um começo, meio e fim. Lembre-se que
                tudo deve ter uma conexão.
              </p>
            </>
          }
          imageLink='../../assets/page01/CardAastronauta.png'
          imageAlt=''
        />
        <Footer_return />
      </main>
    </>
  )
}

export default Page04
