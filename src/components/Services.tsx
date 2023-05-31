import Image from 'next/image';
import services from '../app/services.js'
import style from '../components/Services.module.css'

const Services = () => {
  return (
    
        <>

        
        <div className={style.title}>Servicios a la medida de tus <br/> necesidades</div>

    <div className={style.serviceContainer}>

         {
            services.map( (service) => (
                <div className={style.servicesCards} key={service.id}>
                    <div className={style.content}>

                    <Image className={style.img} width={70} height={72} src={service.img} alt="service" />
                    <div className={style.detail}></div>
                    
                    <p className={style.subtitle}>{service.title}</p>
                    <div className={style.paragraph}>{service.paragraph}</div>

                    </div>
                </div>

            ))

        } 

      
    </div>

    </>
  )
}

export default Services;
