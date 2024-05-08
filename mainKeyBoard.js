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
            "wa": "わ", "wo": "を", "n": "ん"

            // 追加したいひらがなのパターンと対応するひらがなを追加
        };

        const aiueoMap = {
            "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
        }



        // "bba" の場合の処理
        if (textLength >= 3 && textField.innerHTML.slice(textLength - 3) === "bba") {

            removeC();
            textField.innerHTML += "っば";
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

