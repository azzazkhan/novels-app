'use client';

import { createContext } from 'react';

export type FontFace = 'nunito' | 'lora' | 'roboto' | 'merriweather';
export type FontSize = 14 | 16 | 18 | 20 | 24;
export type ParagraphSpacing = 6 | 8 | 10 | 14 | 16 | 20;
export type LineHeight = 1 | 1.125 | 1.25 | 1.375 | 1.5 | 1.75 | 2 | 2.5 | 3;
export type Theme = 'light' | 'dark' | 'solarized';
export type TranslationLanguage = 'english' | 'french' | 'dutch' | 'espanol';
export type SpeechLanguage = 'english' | 'french' | 'dutch' | 'espanol' | undefined;
export type PlaybackSpeed = 0.5 | 1 | 1.5 | 2 | 2.5 | 3;

export interface ReadingUtilsContextValue {
    font: FontFace;
    size: FontSize;
    paragraphSpacing: ParagraphSpacing;
    lineHeight: LineHeight;
    theme: Theme;
    translationLanguage: TranslationLanguage;
    speechLanguage: SpeechLanguage;
    playbackSpeed: PlaybackSpeed;
    opened: boolean;

    setFont: (font?: FontFace) => void;
    setSize: (size?: FontSize) => void;
    setParagraphSpacing: (paragraphSpacing?: ParagraphSpacing) => void;
    setLineHeight: (lineHeight?: LineHeight) => void;
    setTheme: (theme?: Theme) => void;
    setTranslationLanguage: (translationLanguage?: TranslationLanguage) => void;
    setSpeechLanguage: (speechLanguage?: SpeechLanguage) => void;
    setPlaybackSpeed: (playbackSpeed?: PlaybackSpeed) => void;
    setOpened: (opened?: boolean) => void;
}

export const ReadingUtilsContext = createContext<ReadingUtilsContextValue>({
    font: 'nunito',
    size: 14,
    paragraphSpacing: 6,
    lineHeight: 1,
    theme: 'light',
    translationLanguage: 'english',
    speechLanguage: undefined,
    playbackSpeed: 1,
    opened: false,

    setFont: () => {},
    setSize: () => {},
    setParagraphSpacing: () => {},
    setLineHeight: () => {},
    setTheme: () => {},
    setTranslationLanguage: () => {},
    setSpeechLanguage: () => {},
    setPlaybackSpeed: () => {},
    setOpened: () => {},
});
