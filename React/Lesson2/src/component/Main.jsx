import React, { Component } from 'react'
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>


        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

          <strong className='text-danger'>Merhabalar!</strong>
          {/* INLINE CSS */}
          <span style={{"color":"black"}}>You should check in on some of those fields below.</span>
        </div>

        <button className='btn btn-success mb-5 mt-5'>blog/list</button>

        {/* PARAGRAF */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum, amet ipsam aliquam cumque illo error, aut dignissimos consequatur repellendus aspernatur est tempore earum vel perspiciatis vero ullam ad fuga?
        Voluptatibus magni, eligendi sed fugiat adipisci rerum vitae, sint iste porro dolorum error veniam rem animi nulla dolore, laudantium odit necessitatibus accusamus quod placeat magnam quidem! Ratione deserunt eligendi molestias.
        Soluta eum cumque odio recusandae vitae consequatur fuga, itaque libero ratione neque placeat quos. Earum deserunt eveniet, possimus, tempore eligendi numquam repudiandae perferendis eos vel modi ea! Obcaecati, dolores animi.
        Consectetur aliquid facilis, dignissimos ut harum at et libero iusto odit distinctio qui, magni neque provident molestias velit eius saepe ipsum accusamus, accusantium voluptatibus voluptas? Autem eum maiores architecto consequuntur.
        Dolores similique deserunt, molestiae neque placeat, corporis minima animi soluta, eveniet impedit illo officiis quasi error aperiam rem nam praesentium in. Tenetur facilis aspernatur provident debitis obcaecati deleniti totam facere.
        Laborum vero eligendi possimus quasi quibusdam error repudiandae rem, adipisci molestias et sequi dolorum ullam earum voluptates? Sed ut sequi quod! Sint nemo quibusdam, provident incidunt repellendus impedit nulla vel!
        Autem, vero quia! Odit impedit tenetur exercitationem expedita iste voluptas praesentium, optio consectetur, eos aliquam incidunt sed quidem possimus, tempore numquam fuga fugit natus distinctio vel dicta voluptate minus dolorum.
        Maxime error quod quasi vitae molestiae dolorum incidunt rem, quidem natus quia nemo beatae, tenetur quis nostrum dolor magni. Ipsa consequuntur maxime nobis qui obcaecati distinctio, laborum porro adipisci architecto?
        Porro aliquam aspernatur dignissimos! Ut officiis repellendus debitis excepturi. Recusandae laborum numquam voluptas deserunt provident iste totam error adipisci enim a distinctio odit, architecto non! Voluptatem in voluptatum sunt vitae?
        Adipisci cumque consequuntur distinctio alias quod suscipit hic quo odio cum labore. Nihil fugit sint quasi facere ad eos ratione maiores ipsam. Unde ipsum incidunt voluptates vitae dicta, at nam.</p>

      </React.Fragment>
    )
  }
}
