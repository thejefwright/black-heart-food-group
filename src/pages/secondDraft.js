import * as React from 'react';
import styled from 'styled-components';
import background from '../images/CJ_PrimaryOutlineRGB-02.png';
import flowers from '../images/CJ_flowers_web_04.png';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/300.css';

const MenuStyles = styled.div`
  width: 100%;
  height: 100%;
  background: #ffb3ab;
  background-image: url(${flowers});
  color: black;
  padding-bottom: 15rem;

  .header {
    background: #f8423a;
    height: 25rem;
    padding: 4rem;
    background-image: url(${background});
    background-position: center;
    background-size: 30rem;
    background-repeat: no-repeat;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 10rem 20rem;
  }
  section {
    /* font-family: 'Nunito Sans'; */
    background: #ffb3ab;
    border: 1px solid #f8423a;
    margin: 2rem;
    padding: 3rem 1rem;
  }
  .section_header {
    font-family: 'Nunito Sans';
    font-weight: 700;
    -webkit-text-stroke: 1.5px #f8423a;
    line-height: 1em;
    text-align: center;
    color: #ffb3ab;
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  .second {
    padding-top: 3rem;
  }

  .menu_items {
    list-style: none;
  }
  li {
    padding: 2rem 0;
    font-size: 2rem;
  }
  .title {
    font-weight: 700;
  }
  @media (max-width: 1000px) {
    .wrapper {
      margin: 1rem;
      padding-top: 3rem;
    }
  }
  @media (max-width: 800px) {
    .wrapper {
      grid-template-columns: 1fr;
      margin: 1rem;
      padding-top: 3rem;
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
              <span className="title">Dip</span>
              <br />
              Crudite, house crisps, rotating daily flavors
            </li>
            <li>
              <span className="title">Oysters Rockefeller</span>
              <br />
              garlic-herb butter, green chartreuse, lemony breadcrumbs
            </li>
            <li>
              <span className="title">Lobster Arancini</span>
              <br />
              tarragon aioli
            </li>
            <li>
              <span className="title">Deviled Eggs</span>
              <br />
              smoked trout roe, dill
            </li>
            <li>
              <span className="title">Fried Oysters</span>
              <br />
              bacon jam, lemon aioli, scallion
            </li>
          </ul>

          <p className="section_header second">II</p>

          <ul className="menu_items">
            <li>
              <span className="title">Raw Local Oysters</span>
              <br />
              Champagne Mignonette, cocktail pearls, pickled carrot granita
            </li>
            <li>
              <span className="title">Maine Tuna Crudo</span>
              <br />
              chili oil, castelvetrano olives, fennel, orange
            </li>
            <li>
              <span className="title">Shrimp Ceviche - Cocktail Style</span>
              <br />
              tomato, horseradish, lime, celery, jalapeno
            </li>
          </ul>
        </section>
        <section>
          <p className="section_header">III</p>
          <ul className="menu_items">
            <li>
              <span className="title">Local Lettuces</span>
              <br />
              Maine crab, shaved radish, grapefruit, citrus vinaigrette
            </li>

            <li>
              <span className="title">Bangs Island Mussels Escabache</span>
              <br />
              grilled sourdough, rouille, hard boiled egg, chorizo
            </li>
            <li>
              <span className="title">Seared scallops</span>
              <br />
              black rice, crushed cucumbers, salsa verde
            </li>
            <li>
              <span className="title">Sugar Snap Peas</span>
              <br />
              mint, local feta, roasted garlic, toasted sesame, miso dressing
            </li>
            <li>
              <span className="title">Crispy Braised Pork Belly</span>
              <br />
              juniper, pickled cucumber, lime crema
            </li>
          </ul>

          <p className="section_header second">IV</p>
          <ul className="menu_items">
            <li>
              <span className="title">Brown Butter Roasted Halibut</span>
              <br />
              corn, tomatoes, grilled shishitos, arugula, fresh lime
            </li>

            <li>
              <span className="title">Butter Poached Lobster</span>
              <br />
              sprouted farro, roasted summer squash, preserved lemon, green
              goddess
            </li>
            <li>
              <span className="title">The Ubiquitous Smash Burger</span>
              <br />
              pimento cheese, house pickles, potato bun, salt & vinegar fries
            </li>
          </ul>
        </section>
      </div>
    </MenuStyles>
  );
}
