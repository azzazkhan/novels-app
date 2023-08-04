/* eslint-disable class-methods-use-this */
interface Props {
    text: string;
    voice?: string;
    lang?: string;
    pitch?: number;
    rate?: number;
    volume?: number;
}

export class SpeechSynthesisService {
    private utterance: SpeechSynthesisUtterance;

    private selected: SpeechSynthesisVoice;

    constructor(props: Props) {
        this.utterance = new SpeechSynthesisUtterance();
        const voices = window.speechSynthesis.getVoices();

        console.log(voices);

        this.selected = voices.find((voice) => voice.name === props.voice) || voices[0];
        this.utterance.voice = this.selected;
        this.utterance.text = props.text.replace(/\n/g, '');
        this.utterance.lang = props.lang || 'en-GB';
        this.utterance.pitch = props.pitch ? parseFloat(props.pitch.toString()) : 0.8;
        this.utterance.rate = props.rate ? parseFloat(props.rate.toString()) : 1;
        this.utterance.volume = props.volume ? parseFloat(props.volume.toString()) : 1;
    }

    static supported() {
        return 'speechSynthesis' in window;
    }

    static getVoice(selected?: string) {
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find((voice) => voice.name === selected);
        return voice !== undefined ? voice : voices[0];
    }

    onend(callback: SpeechSynthesisUtterance['onend']) {
        this.utterance.onend = callback;
    }

    onerror(callback: SpeechSynthesisUtterance['onerror']) {
        this.utterance.onerror = callback;
    }

    speak() {
        // console.log('Canceling previous speeches');
        // window.speechSynthesis.cancel();
        console.log('Running current speech');
        window.speechSynthesis.speak(this.utterance);
    }

    pause() {
        console.log('Pausing speech');
        window.speechSynthesis.pause();
    }

    cancel() {
        console.log('Canceling all speeches');
        window.speechSynthesis.cancel();
    }

    resume() {
        console.log('Resuming speech');
        window.speechSynthesis.resume();
    }
}
