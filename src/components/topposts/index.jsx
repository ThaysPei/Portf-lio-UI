import "./style.css";


export function TopPosts(){
    return (
            
            <section className="topposts-section">
      {/* Título e link */}
      <div className="container-title">
        <h3>Recent Posts</h3>
        <a href="#">View All</a>
      </div>

      {/* Card */}
      <div className="container-grid">
        <h3>Making a design system from scratch</h3>
        <h4>12 Feb 2020 | Design, Pattern</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>


         <div className="container-grids">
        <h3>Creating pixel perfect icons in Figma</h3>
        <h4>12 Feb 2020 | Figma, Icon Design</h4>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor
        do amet sint. Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet.</p>
         </div>
    </section>
        

    );


}