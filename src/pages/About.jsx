import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <article>
          <h3>About Shopie</h3>
          <p>This is a Shopie application built with React and React Router.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            corrupti! Illum, dicta dignissimos, maiores adipisci possimus
            quaerat similique incidunt inventore iusto modi officiis quis
            tempore repudiandae exercitationem, aliquid ducimus optio!
          </p>
        </article>
        <div className="row my-3">
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" />
          </div>
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" />
          </div>
        </div>
        <article className="mb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            reprehenderit soluta architecto aliquid! Vitae sit, nobis quae quod,
            sequi repellendus aperiam totam aut, pariatur tempore eos. Debitis
            necessitatibus dolorem consectetur?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laboriosam, tempore incidunt?
            Perspiciatis nobis aliquid, recusandae tempore sunt dolor ratione
            numquam voluptas laborum iure quidem deleniti voluptates et corrupti
            aperiam maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ipsa obcaecati porro corporis quam, odit architecto doloremque id
            sapiente aspernatur, optio veniam? Excepturi facere voluptatum
            eligendi assumenda, nisi itaque sed. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam ab, quod mollitia dolorem
            consectetur minus voluptatem similique esse odit exercitationem,
            ducimus dignissimos accusamus vitae corporis harum, nobis totam
            veritatis. Iusto Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Deserunt error veritatis, nihil commodi omnis ex! Tenetur
            accusantium officiis ratione eius voluptas veniam ipsa quae, dolore
            maxime sunt aut et eveniet.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default About;
