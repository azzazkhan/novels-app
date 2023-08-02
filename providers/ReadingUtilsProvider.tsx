'use client';

import { FC, ReactNode, useMemo, useState } from 'react';
import { ReadingUtilsContext } from 'contexts';
import type {
    ReadingUtilsContextValue as Context,
    FontFace,
    FontSize,
    LineHeight,
    ParagraphSpacing,
    PlaybackSpeed,
    SpeechLanguage,
    Theme,
    TranslationLanguage,
} from 'contexts/ReadingUtilsContext';

interface Props {
    children?: ReactNode;
}

const DEFAULT_FONT: Context['font'] = 'nunito';
const DEFAULT_SIZE: Context['size'] = 16;
const DEFAULT_PARAGRAPH_SPACING: Context['paragraphSpacing'] = 6;
const DEFAULT_LINE_HEIGHT: Context['lineHeight'] = 1;
const DEFAULT_THEME: Context['theme'] = 'light';
const DEFAULT_TRANSLATION_LANGUAGE: Context['translationLanguage'] = 'english';
const DEFAULT_SPEECH_LANGUAGE: Context['speechLanguage'] = undefined;
const DEFAULT_PLAYBACK_SPEED: Context['playbackSpeed'] = 1;

const ReadingUtilsProvider: FC<Props> = ({ children }) => {
    const [font, setFont] = useState<FontFace>('nunito');
    const [size, setSize] = useState<FontSize>(14);
    const [paragraphSpacing, setParagraphSpacing] = useState<ParagraphSpacing>(6);
    const [lineHeight, setLineHeight] = useState<LineHeight>(1);
    const [theme, setTheme] = useState<Theme>('light');
    const [translationLanguage, setTranslationLanguage] = useState<TranslationLanguage>('english');
    const [speechLanguage, setSpeechLanguage] = useState<SpeechLanguage>(undefined);
    const [playbackSpeed, setPlaybackSpeed] = useState<PlaybackSpeed>(1);
    const [opened, setOpened] = useState(false);

    const updateFont: Context['setFont'] = () => setFont(() => font || DEFAULT_FONT);
    const updateSize: Context['setSize'] = () => setSize(() => size || DEFAULT_SIZE);
    const updateParagraphSpacing: Context['setParagraphSpacing'] = () =>
        setParagraphSpacing(() => paragraphSpacing || DEFAULT_PARAGRAPH_SPACING);
    const updateLineHeight: Context['setLineHeight'] = () =>
        setLineHeight(() => lineHeight || DEFAULT_LINE_HEIGHT);
    const updateTheme: Context['setTheme'] = () => setTheme(() => theme || DEFAULT_THEME);
    const updateTranslationLanguage: Context['setTranslationLanguage'] = () =>
        setTranslationLanguage(() => translationLanguage || DEFAULT_TRANSLATION_LANGUAGE);
    const updateSpeechLanguage: Context['setSpeechLanguage'] = () =>
        setSpeechLanguage(() => speechLanguage || DEFAULT_SPEECH_LANGUAGE);
    const updatePlaybackSpeed: Context['setPlaybackSpeed'] = () =>
        setPlaybackSpeed(() => playbackSpeed || DEFAULT_PLAYBACK_SPEED);
    const updateOpened: Context['setOpened'] = (opened) =>
        setOpened((current) => (typeof opened === 'boolean' ? opened : !current));

    const value: Context = useMemo(
        () => ({
            font,
            size,
            paragraphSpacing,
            lineHeight,
            theme,
            translationLanguage,
            speechLanguage,
            playbackSpeed,
            opened,

            setFont: updateFont,
            setSize: updateSize,
            setParagraphSpacing: updateParagraphSpacing,
            setLineHeight: updateLineHeight,
            setTheme: updateTheme,
            setTranslationLanguage: updateTranslationLanguage,
            setSpeechLanguage: updateSpeechLanguage,
            setPlaybackSpeed: updatePlaybackSpeed,
            setOpened: updateOpened,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            font,
            size,
            paragraphSpacing,
            lineHeight,
            theme,
            translationLanguage,
            speechLanguage,
            playbackSpeed,
            opened,
        ]
    );

    return <ReadingUtilsContext.Provider value={value}>{children}</ReadingUtilsContext.Provider>;
};

export default ReadingUtilsProvider;
