/* eslint-disable prefer-destructuring */
'use client';

import { FC, useEffect } from 'react';
import { SpeechSynthesisService } from 'services';

interface Props {
    content: string;
}

const TextToSpeech: FC<Props> = ({ content }) => {
    // const [paragraphs, setParagraphs] = useState<string[]>([]);
    // const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // const message = new SpeechSynthesisUtterance();

        // Set the text you want to be spoken
        // message.text = 'Hello, this is a sample speech synthesis.';

        // Optional: Set voice parameters
        // message.voice = speechSynthesis.getVoices()[0]; // You can get different voices by indexing the array.
        // message.pitch = 1; // Ranges from 0 to 2
        // message.rate = 1; // Ranges from 0.1 to 10
        // message.volume = 1; // Ranges from 0 to 1

        // Speak the text
        // speechSynthesis.speak(message);

        // const utterance = new SpeechSynthesisUtterance();
        // utterance.text = 'A quick brown fox jumps over the lazy dog';
        // utterance.voice = speechSynthesis.getVoices()[0];
        // utterance.pitch = 1; // Ranges from 0 to 2
        // utterance.rate = 1; // Ranges from 0.1 to 10
        // utterance.volume = 1; // Ranges from 0 to 1
        // utterance.lang = 'en-GB';
        // utterance.pitch = 0.8;
        // utterance.rate = 1;
        // utterance.volume = 1;

        // speechSynthesis.speak(utterance);

        if (!SpeechSynthesisService.supported())
            throw new Error('Text to Speech not supported by this device!');

        const speech = new SpeechSynthesisService({
            text: 'A quick brown fox jumps over the lazy dog.',
        });

        speech.speak();

        console.log(speech);
        // const paragraphs = content.split('\n\n').filter((p) => p.trim() !== '');

        // console.log(`Found ${paragraphs.length} paragraphs!`);

        // setParagraphs(paragraphs);

        return window.speechSynthesis.cancel();
    }, []);

    return null;
};

export default TextToSpeech;
