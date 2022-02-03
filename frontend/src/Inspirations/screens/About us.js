import './About us.css'
import AboutUs from "../components/AboutUs";

const AboutUss = () => {

    const products = [
        {
          name: "Ali Visram",
          imgUrl:
            "/photos/img_ali.png",
          description:
              "25 anos. Estudou Física. Está atualmente focado em adquirir e aprimorar os seus conhecimentos de junior full stack developer.",
        },
        {
          name: "Leonardo Dantas",
          imgUrl: 
            "/photos/img_leo.png",
          description:
              "25 anos. Formado em Turismo. Está atualmente focado em adquirir e aprimorar os seus conhecimentos de junior full stack developer.",
        },
        {
          name: "Yuri Banzato",
          imgUrl: "/photos/img_yuri.png",
          description:
            "25 anos. Estudou Física. Está atualmente focado em adquirir e aprimorar os seus conhecimentos de junior full stack developer.",
        },
      ];

    return (

        <div className="homescreen">
      <h2 className="homescreen__title">The team</h2>
      <div className="homescreen__products">
        {
          products.map((product) => (
            <AboutUs
              key={product._id}
              name={product.name}
              description={product.description}
              imgUrl={product.imgUrl}
            />
          ))
        }
      </div>
    </div>
        // <div className="aboutus__screen">
        //     <div className="about__title">About us</div>
        //         <div className="student">
        //             <p>Ali Visram</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        //         <div className="student">
        //             <p>Leonardo Rodrigues</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        //         <div className="student">
        //             <p>Yuri Banzato</p>
        //             <p>O meu nome é...</p>
        //             <img src="" alt="">
        //             </img>
        //         </div>
        // </div>
    )
}

export default AboutUss