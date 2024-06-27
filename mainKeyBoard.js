let $mode = document.getElementById("mode");
let value = 0;
let i = 0;



// 文字入力タイプ切り替え
function toggleRoma() {

    $mode.innerHTML = "ローマ字入力"; value = 0;
}
function toggleuppercaseRoma() {
    $mode.innerHTML = "ローマ字入力(大文字)"; value = 1; i = 0;
}
function toggleHiragana() {
    $mode.innerHTML = "日本語入力"; value = 2;
}

value = 0;

function typeCharacter(character, character1) {
    //0=ローマ字入力 
    //1=ローマ字入力(大文字)
    //2=ひらがな入力.
    if (value === 0) {
        textField.innerHTML += character;
    }

    else if (value === 1) {
        textField.innerHTML += character1;

    }

    else if (value === 2) {

        if (i == 0) {
            textField.innerHTML += " ";
            i++
        }


        textField.innerHTML += character;

        // textFiledのプロパティ
        const textLength = textField.innerHTML.length;
        const lastThreeChars = textField.innerHTML.slice(textLength-3 );
        const lastTwoChars = textField.innerHTML.slice(textLength - 2);
        const lastOneChars = textField.innerHTML.slice(textLength - 1);

        // ひらがなのマッピング
        const hiraganaMap = {

            "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
            "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
            "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
            "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
            "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
            "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
            "ya": "や", "yu": "ゆ", "yo": "よ",
            "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
            "wa": "わ", "wi": "うぃ", "wu": "う", "we": "うぇ", "wo": "を", "n": "ん",
            "va": "ヴぁ", "vi": "ヴぃ", "vu": "ヴ", "ve": "ヴぇ", "vo": "ヴぉ",
            "ca": "か", "ci": "し", "cu": "く", "ce": "せ", "co": "こ", 
            "fa": "ふぁ", "fi": "ふぃ", "fu": "ふ", "fe": "ふぇ", "fo": "ふぉ", 
            "qa": "くぁ", "qi": "くぃ", "qu": "く", "qe": "くぇ", "qo": "くぉ", 
            "ja": "じゃ", "ji": "じ", "ju": "じゅ","じ": "ji", "jo": "じょ",


            "za": "ざ", "zi": "じ",
            "zu": "ず", "ze": "ぜ", "zo": "ぞ",
            "da": "だ", "di": "ぢ", "du": "づ", "de": "で", "do": "ど",
            "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
            "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",

            "la": "ぁ","li": "ぃ","lu": "ぅ","le": "ぇ","lo": "ぉ",

            "xa": "ぁ", "xi": "ぃ", "xu": "ぅ", "xe": "ぇ", "xo": "ぉ",

            "nn": "ん", "xn": "ん",


            // 追加したいひらがなのパターンと対応するひらがなを追加
        };

        const aiueoMap = {
            "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
        }

        const lowercaseLetter = {
            "kya": "きゃ", "kyi": "きぃ", "kyu": "きゅ", "kye": "きぇ", "kyo": "きょ",
            "sha": "しゃ", "shi": "し",  "shu": "しゅ", "she":"しぇ", "sho": "しょ",
            "cha": "ちゃ", "chi":"ち", "chu": "ちゅ", "che": "ちぇ", "cho": "ちょ",
            "nya": "にゃ", "nyi": "にぃ", "nyu": "にゅ", "nye" :"にぇ", "nyo": "にょ",
            "hya": "ひゃ", "hyi": "ひぃ", "hyu": "ひゅ", "hye": "ひぇ", "hyo": "ひょ",
            "mya": "みゃ", "myi": "みぃ", "myu": "みゅ", "mye": "みぇ", "myo": "みょ",
            "rya": "りゃ", "ryi": "りぃ", "ryu": "りゅ", "rye": "りぇ", "ryo": "りょ",
            "gya": "ぎゃ", "gyi": "ぎぃ", "gyu": "ぎゅ", "gye": "ぎぇ", "gyo": "ぎょ",

            "zya": "じゃ", "zyi": "じぃ", "zyu": "じゅ", "zye": "じぇ", "zyo": "じょ",
            "bya": "びゃ", "byi": "びぃ", "byu": "びゅ", "bye": "びぇ", "byo": "びょ",
            "pya": "ぴゃ", "pyi": "ぴぃ", "pyu": "ぴゅ", "pye": "ぴぇ", "pyo": "ぴょ",

            
            "tha": "てゃ", "thi": "てぃ", "thu": "てゅ", "the": "てぇ", "tho": "てょ",
            "dha": "でゃ", "dhi": "でぃ", "dhu": "でゅ", "dhe": "でぇ", "dho": "でょ",
            "ltu": "っ","lya": "ゃ","lyu": "ゅ","lyo": "ょ", "lwa": "ゎ",
            "xtu": "っ", "xya": "ゃ", "xyu": "ゅ", "xyo": "ょ", "xwa": "ゎ",

        };


        // "bba" の場合の処理
        if ( lastThreeChars in lowercaseLetter) {

            removeC();
            textField.innerHTML += lowercaseLetter[lastThreeChars];
        }

        else if (lastTwoChars in hiraganaMap) {

            removeB();
            textField.innerHTML += hiraganaMap[lastTwoChars];
        }


        else if (lastOneChars in aiueoMap) {

            removeA()
            textField.innerHTML += aiueoMap[lastOneChars]
        }


        const text = textField.textContent; // テキストを取得
        const modifiedText = text.replace(" ", ''); // テキスト内の 空白 を削除
        textField.textContent = modifiedText; // 変更を反映




    }

}

// ABC:1 2 3 文字削除

function removeA() {
    const text = textField.innerHTML;
    textField.innerHTML = text.slice(0, -1); // 最後の文字を削除
}

function removeB() {
    const text = textField.innerHTML;
    textField.innerHTML = text.slice(0, -2); // 最後の文字を削除
}

function removeC() {
    const text = textField.innerHTML;
    textField.innerHTML = text.slice(0, -3); // 最後の文字を削除
}

