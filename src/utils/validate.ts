// 入力されているかチェック
export const isInput: (val: string) => boolean = (val: string) => {
  return val.length <= 0;
};

// メールアドレスかチェック
export const isAddress: (val: string) => boolean = (val: string) => {
  const reg = /.+@.+\..+/;

  return !reg.test(val);
};

// 数字のみかどうか
export const isNumber: (val: string) => boolean = (val: string) => {
  const reg = /^[0-9]+$/;

  return !reg.test(val);
};

// 半角英数字かチェック
export const isHanEisu: (val: string) => boolean = (val: string) => {
  // 空白チェックする正規表現
  const reWhiteSpace = new RegExp('/^s+$/');

  // 半角英数字で空白がない場合true
  if (val.match(/^[A-Za-z0-9]*$/) && !reWhiteSpace.test(val)) {
    return true;
  } else {
    return false;
  }
};

// 文字数が最低文字数いっているか確認
export const isMin: (val: string, min?: number) => boolean = (val: string, min = 8) => {
  return val.length >= min;
};

// 文字数が最大文字数いっているか確認
export const isMax: (val: string, max?: number) => boolean = (val: string, max = 16) => {
  return val.length <= max;
};
