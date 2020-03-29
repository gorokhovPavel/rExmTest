import * as React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <p>Header</p>
      </header>
      <main>
        <article>
          <h1>Что такое Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн. Его популяризации в новое время
          </p>
        </article>
        <nav>
          <p>Navigation</p>
        </nav>
        <aside>
          <p>Sidebar</p>
        </aside>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default App;
