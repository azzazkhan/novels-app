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

const DEFAULT_FONT_FACE: Context['fontFace'] = 'nunito';
const DEFAULT_SIZE_SIZE: Context['fontSize'] = 16;
const DEFAULT_PARAGRAPH_SPACING: Context['paragraphSpacing'] = 14;
const DEFAULT_LINE_HEIGHT: Context['lineHeight'] = 1.5;
const DEFAULT_THEME: Context['theme'] = 'light';
const DEFAULT_TRANSLATION_LANGUAGE: Context['translationLanguage'] = 'english';
const DEFAULT_SPEECH_LANGUAGE: Context['speechLanguage'] = 'english';
const DEFAULT_PLAYBACK_SPEED: Context['playbackSpeed'] = 1;

const ReadingUtilsProvider: FC<Props> = ({ children }) => {
    const [fontFace, setFontFace] = useState<FontFace>(DEFAULT_FONT_FACE);
    const [fontSize, setFontSize] = useState<FontSize>(DEFAULT_SIZE_SIZE);
    const [paragraphSpacing, setParagraphSpacing] =
        useState<ParagraphSpacing>(DEFAULT_PARAGRAPH_SPACING);
    const [lineHeight, setLineHeight] = useState<LineHeight>(DEFAULT_LINE_HEIGHT);
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const [translationLanguage, setTranslationLanguage] = useState<TranslationLanguage>(
        DEFAULT_TRANSLATION_LANGUAGE
    );
    const [speechLanguage, setSpeechLanguage] = useState<SpeechLanguage>(DEFAULT_SPEECH_LANGUAGE);
    const [playbackSpeed, setPlaybackSpeed] = useState<PlaybackSpeed>(DEFAULT_PLAYBACK_SPEED);
    const [opened, setOpened] = useState(false);

    const updateFontFace: Context['setFontFace'] = (font) =>
        setFontFace(() => font || DEFAULT_FONT_FACE);
    const updateFontSize: Context['setFontSize'] = (size) =>
        setFontSize(() => size || DEFAULT_SIZE_SIZE);
    const updateParagraphSpacing: Context['setParagraphSpacing'] = (paragraphSpacing) =>
        setParagraphSpacing(() => paragraphSpacing || DEFAULT_PARAGRAPH_SPACING);
    const updateLineHeight: Context['setLineHeight'] = (lineHeight) =>
        setLineHeight(() => lineHeight || DEFAULT_LINE_HEIGHT);
    const updateTheme: Context['setTheme'] = (theme) => setTheme(() => theme || DEFAULT_THEME);
    const updateTranslationLanguage: Context['setTranslationLanguage'] = (translationLanguage) =>
        setTranslationLanguage(() => translationLanguage || DEFAULT_TRANSLATION_LANGUAGE);
    const updateSpeechLanguage: Context['setSpeechLanguage'] = (speechLanguage) =>
        setSpeechLanguage(() => speechLanguage || DEFAULT_SPEECH_LANGUAGE);
    const updatePlaybackSpeed: Context['setPlaybackSpeed'] = (playbackSpeed) =>
        setPlaybackSpeed(() => playbackSpeed || DEFAULT_PLAYBACK_SPEED);
    const updateOpened: Context['setOpened'] = (opened) =>
        setOpened((current) => (typeof opened === 'boolean' ? opened : !current));

    const value: Context = useMemo(
        () => ({
            fontFace,
            fontSize,
            paragraphSpacing,
            lineHeight,
            theme,
            translationLanguage,
            speechLanguage,
            playbackSpeed,
            opened,

            setFontFace: updateFontFace,
            setFontSize: updateFontSize,
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
            fontFace,
            fontSize,
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
