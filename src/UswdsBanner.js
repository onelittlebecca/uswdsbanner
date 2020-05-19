import { html, css, LitElement } from 'lit-element';

export class UswdsBanner extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: 1.5;
      }
      .usa-banner {
        font-size: .87rem;
        padding-bottom: 0;
        background-color: #0f0f0f;
        
      }
      .usa-accordion {
        list-style-type: none;
        color: #1b1b1b;
        margin: 0;
        padding: 0;
        width: 100%;
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
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img class="usa-banner__header-flag" src="/assets/img/us_flag_small.png" alt="U.S. flag">
          </div>
          <div class="grid-col-fill tablet:grid-col-auto">
            <p class="usa-banner__header-text">An official website of the United States government</p>
            <p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
          </div>
          <button class="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner-demo">
            <span class="usa-banner__button-text">Here’s how you know</span>
          </button>
        </div>
      </header>
    `;
  }
}
