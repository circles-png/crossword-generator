export as namespace cwg;
export = CWG;

declare function CWG(words: string[]): {
    height: number
    width: number
    positionObjArr: {
        wordStr: string
        xNum: number
        yNum: number,
        isHorizon: boolean
    }[]
    ownerMap: (null | { letter: string }
        & (
            { h: number, hIdx: number } |
            { v: number, vIdx: number }
        )
    )[][]
}
