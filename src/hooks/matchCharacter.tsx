import { FC } from "react";

interface MatchCharacterProps {
    currentResult: string;
    keyword: string;
}

export const MakeBold: FC<MatchCharacterProps> = ({ currentResult, keyword }) => {
    const createMarkup = () => {
        return { __html: currentResult.replace(re, '<span>' + keyword + '</span>') };
    }

    let re = new RegExp(keyword, 'g')

    return <div dangerouslySetInnerHTML={createMarkup()} />
}

