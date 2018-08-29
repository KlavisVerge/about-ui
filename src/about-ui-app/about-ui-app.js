import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'api-nav/api-nav.js';
import 'contact-us-ui/contact-us-ui.js';
import 'submit-an-idea-ui/submit-an-idea-ui.js';
/**
 * @customElement
 * @polymer
 */
class AboutUiApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
        }

        .submit-col {
          flex: 1;
          order 3;
          padding: 0 15px 0 15px;
        }

        .about-col {
          flex: 1;
          order: 1;
        }

        .contact-col {
          flex: 1;
          order: 2;
          padding: 0 15px 0 15px;
        }

        api-nav {
          padding: 15px;
        }

        @media (max-width: 480px) {
          .flex-container {
            display: flex;
            flex-direction: row;
          }

          .submit-col {
            display: flex;
            flex-direction: column;
            order: 2;
            flex-grow: unset;
            flex-shrink: unset;
            flex-basis:unset;
            width: 100%;
            padding: 0 5px 0 5px;
          }

          .about-col {
            display: flex;
            flex-direction: column;
            order: 1;
            flex-grow: unset;
            flex-shrink: unset;
            flex-basis:unset;
            width: 100%;
            padding: 0 5px 0 5px;
          }

          .contact-col {
            display: flex;
            flex-direction: column;
            order: 3;
            flex-grow: unset;
            flex-shrink: unset;
            flex-basis:unset;
            width: 100%;
            padding: 0 5px 0 5px;
          }
        }
      </style>
      <api-nav></api-nav>
      <div class="flex-container">
        <div class="about-col">
          <h1>About Us</h1>
          <p>When you are interested in a game, what do you do? Do you like to track your progression? Are you interested in watching others play? 
          Do you enjoy a good conversation?</p>
          <p>Here at <a href="https://www.statsplash.com">StatSplash</a>, we are the same way! With plenty of experience playing games, a bit of technical skill
          and a random whim inspiring this site, here we are now.</p>
          <p>Please take a look around and enjoy the various content you find on the site. Find something that is missing or that you would like to see? A game not covered by
          the site that should be? Please submit the idea to us using on the tool on this page. Have a question, want to communicate with the site creator, provide feedback 
          or anything else? Please contact us with the contact us form also on the page.</p>
          <p>We have many ideas currently under consideration such as progression charts, player comparisons, game guides and many more. As the site matures and
           we continue to gain more data, some of these could turn into a reality. Especially with support from our users. While we want to be an avenue for many different 
           games, community feedback along with activity on the different games will help us prioritize what to do next. There are many things we could do based on the
            data we have received and we will use information like this to narrow down where we should focus.</p>
          <p>The content from the site comes from us and all over the gaming community. With free to use APIs providing some of the information, input from our users 
          as well as our own generated content, we hope to provide you with a rich user experience.</p>
          <p>Enjoy your stay!</p>
          <p></p>
        </div>
        <div class="submit-col">
            <h3>Submit an idea or game</h3>
            <submit-an-idea-ui></submit-an-idea-ui>
        </div>
        <div class="contact-col">
            <h3>Contact us</h3>
            <contact-us-ui></contact-us-ui>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'about-ui-app'
      }
    };
  }
}

window.customElements.define('about-ui-app', AboutUiApp);
