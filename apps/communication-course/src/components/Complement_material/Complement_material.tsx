import './_complement_material.scss'

import Button_donwload from 'libs/ui/src/lib/Button/Button_download'

interface contentComplement_material {
  textDescription: string
  textDescriptionTwo?: string
  buttonText: string
  buttonLink: string
  buttonLinkDownload: string
  imageLink: string
  imageAlt: string
}

const Complement_material = (props: contentComplement_material) => {
  return (
    <>
      <section className='complementMaterial__container'>
        <div className='complementMaterial__container__textButtonContainer'>
          <p className='complementMaterial__container__textButtonContainer--text'>
            {props.textDescription}
          </p>
          <p className='complementMaterial__container__textButtonContainer--text'>
            {props.textDescriptionTwo}
          </p>
          <Button_donwload
            link={props.buttonLink}
            text={props.buttonText}
            download={props.buttonLinkDownload}
          />
        </div>
        <img
          className='complementMaterial__container--image'
          src={props.imageLink}
          alt={props.imageAlt}
        />
      </section>
    </>
  )
}

export default Complement_material
