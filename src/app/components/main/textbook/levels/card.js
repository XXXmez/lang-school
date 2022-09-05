import Component from "../../../../component/component";
import "./details.scss"

class Card extends Component {
    constructor(root, data, details, ind) {
        super(root, 'div', ['works__card']);

        this.eng = new Component(this.component, 'p', ['works__card-eng'], data.word);
        this.rus = new Component(this.component, 'p', ['works__card-rus'], data.wordTranslate);

        this.component.addEventListener('click', () => {
            details.textContent = '';
            this.detail = new Component(details, 'div', ['details']);

            this.detailImage = new Component(this.detail.component, 'div', ['details__image']);
            this.detailImg = new Component(this.detailImage.component, 'img', ['details__img']);
            this.detailImg.component.alt = data.image;

            this.detailDescription = new Component(this.detail.component, 'div', ['details__description']);
            this.detailWord = new Component(this.detailDescription.component, 'h2', ['details__word'], data.word);
            this.detailWordTranslate = new Component(this.detailDescription.component, 'h3', ['details__wordTranslate'], data.wordTranslate);
            this.detailTranscription = new Component(this.detailDescription.component, 'h3', ['details__transcription'], data.transcription);
            this.detailMeaning = new Component(this.detailDescription.component, 'h4', ['details__meaning'], 'Описание');
            this.detailTextMeaning = new Component(this.detailDescription.component, 'p', ['details__textMeaning']);
            this.detailTextMeaning.component.innerHTML = `${data.textMeaning}`;
            this.detailTextMeaningTranslate = new Component(this.detailDescription.component, 'p', ['details__textMeaningTranslate']);
            this.detailTextMeaningTranslate.component.innerHTML = `${data.textMeaningTranslate}`;
            this.detailExample = new Component(this.detailDescription.component, 'h4', ['details__example'], 'Использование');
            this.detailTextExample = new Component(this.detailDescription.component, 'p', ['details__textExample']);
            this.detailTextExample.component.innerHTML = `${data.textExample}`;
            this.detailTextExampleTranslate = new Component(this.detailDescription.component, 'p', ['details__textExampleTranslate'], data.textExampleTranslate);
            this.detailTextExampleTranslate.component.innerHTML = `${data.textExampleTranslate}`;
        });

        if (ind == 0 || (ind % 20) == 0) {
            this.component.click()
        }
    }
}

export default Card;