import * as React from 'react';
import styled from 'styled-components';
import background from '../images/CJ_PrimaryOutlineRGB-16.png';
import flowers from '../images/CJ_flowers_web_04.png';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/300.css';

const MenuStyles = styled.div`
  width: 100%;
  height: 100%;
  background: #ffb3ab;
  background-image: url(${flowers});
  color: black;

  .header {
    background: #f8423a;
    height: 18rem;
    padding: 4rem;
    background-image: url(${background});
    background-position: center;
    background-size: 30rem;
    background-repeat: no-repeat;
  }
  h1 {
    color: black;
  }
  section {
    font-family: 'Nunito Sans';
    background: #ffb3ab;
    border: 1px solid #f8423a;
    margin: 3em;
    padding: 1em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .section_header {
    font-family: 'Nunito Sans';
    -webkit-text-stroke: 1.5px #f8423a;
    line-height: 1em;
    text-align: center;
    color: #ffb3ab;
    font-size: 3rem;
  }
  .menu_items {
    list-style: none;
  }
  li {
    padding: 2rem 0;
  }
  .title {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export default function firstDraft() {
  return (
    <MenuStyles>
      <header className="header"></header>
      <div className="wrapper">
        <section>
          <p className="section_header">I</p>
          <ul className="menu_items">
            <li>
              <span className="title">Dips with Crudite and chips</span>
              <br />
              daily selection - French Onion Dip - Charred Eggplant and lemon
              spread - Pimento Cheese - green goddess
            </li>
            <li>
              <span className="title">Oysters Rockefeller</span>
              <br />
              garlic-herb butter, green chartreuse, lemony breadcrumbs
            </li>
            <li>
              <span className="title">Pimento Cheese Arancini</span>
              <br />
            </li>
            <li>
              <span className="title">Deviled Eggs</span>
              <br />
              smoked trout roe, dill
            </li>
            <li>
              <span className="title">Fried Oysters</span>
              <br />
              bacon maramalade, lemon aioli, scallion
            </li>
            <li>
              <span className="title">Crispy Braised Pork Belly</span>
              <br />
              juniper, cucumber, lime crema
            </li>
          </ul>
        </section>
        <section>
          <p className="section_header">II</p>

          <ul className="menu_items">
            <li>
              <span className="title">Raw Local Oysters</span>
              <br />
              Champagne Mignonette, cocktail pearls
            </li>
            <li>
              <span className="title">Maine tuna or scallop crudo</span>
              <br />
              chili oil, smoked olives, fennel
            </li>
            <li>
              <span className="title">Shrimp cocktail ceviche</span>
              <br />
              horseradish, lime, cucumber, jalapeno, avocado
            </li>
          </ul>
        </section>
        <section>
          <p className="section_header">III</p>
          <ul className="menu_items">
            <li>
              <span className="title">Local Lettuces</span>
              <br />
              shaved radish and celery, grapefruit, crunchy sourdough, citrus
              vinaigrette
            </li>
            <li>
              <span className="title">Charred Chicken Skewers</span>
              <br />
              toasted couscous, red onion, cucumber, local feta
            </li>
            <li>
              <span className="title">Grilled Green Beans</span>
              <br />
              tahini ranch, blistered tomatoes, cilantro
            </li>
            <li>
              <span className="title">Brown Butter Roasted Pollock</span>
              <br />
              toasted miso couscous, grilled scallions,
            </li>
            <li>
              <span className="title">Pan Seared scallops</span>
              <br />
              corn, tomatoes, blistered shishitos, arugula,
            </li>
          </ul>
        </section>
        <section>
          <p className="section_header">IV</p>
          <ul className="menu_items">
            <li>
              <span className="title">Black Olive Oil Poached Halibut</span>
              <br />
              grilled summer squash, black rice, chimichurri
            </li>
            <li>
              <span className="title">Grilled skirt steak</span>
              <br />
              charred radicchio, Bayley Hazen bleu cheese, green peppercorn
              sauce
            </li>
            <li>
              <span className="title">Butter Poached Lobster</span>
              <br />
              sprouted farro, preserved lemon, tomatoes, tarragon aioli
            </li>
            <li>
              <span className="title">The Ubiquitous Smash Burger</span>
              <br />
              pimento cheese, house pickles, potato bun, fries
            </li>
          </ul>
        </section>
      </div>
    </MenuStyles>
  );
}
