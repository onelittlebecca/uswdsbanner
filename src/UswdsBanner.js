import { html, css, LitElement } from 'lit-element';

export class UswdsBanner extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: 1.5;
      }
      .usa-accordion {
        list-style-type: none;
        color: #1b1b1b;
        margin: 0;
        padding: 0;
        width: 100%;
        background-color:#f0f0f0;
      }

      .active, .usa-accordion__button:hover {
        background-color: #ccc;
      }
      
      .content {
        padding: 0 18px;
        display: none;
        overflow: hidden;
        background-color: #f1f1f1;
      }

      .usa-banner__header{
        padding-bottom: .5rem;
        padding-top: .5rem;
        font-size: .8rem;
        font-weight: 400;
        min-height: 3rem;
        position: relative;
      }
      .usa-banner__inner{
        margin-left: auto;
        margin-right: auto;
        max-width: 64rem;
        padding-left: 1rem;
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -ms-flex-wrap: wrap!important;
        flex-wrap: wrap!important;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        padding-right: 0;
      }
      .usa-banner__header-flag, .grid-col, .usa-banner__header-text {
        width: auto !important;
        max-width:100%;
      }
      .usa-banner__header-flag, .usa-banner__header-text {
        -webkit-box-flex: 0!important;
        flex: 0 0 auto!important;
      }
      .usa-banner__header-flag {
        float: left;
        padding-right: 3px;
      }
      .usa-banner__header-text p{
        margin-top: 0px;
      }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    var coll = document.getElementsByClassName("usa-accordion__button");
    var i;
  }


  render() {
    return html`
      <div class="usa-accordion" aria-label="Official Government Website">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="usa-banner__header-flag">
              <img src="https://designsystem.digital.gov/assets/img/us_flag_small.png" alt="U.S. flag">
            </div>
            <div class="usa-banner__header-text">
              <p>An official website of the United States government</p>
              <!--<p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>-->
            </div>
            <button class="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-demo">
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
            <div class="content">
              <p> some shit about gov stuff with icons and things </p>
            
            </div>

          </div>
        </header>
      </div>
    `;
  }

   /**
   * LitElement properties and shadowRoot ready
   */
  firstUpdated() {
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

}
